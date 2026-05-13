"use client";
import {useState,useEffect} from "react";
import ToolCard from "@/components/ToolCard";
import SummaryCards from "@/components/SummaryCards";
import Link from "next/link";
import {pricingData} from "@/data/pricing"
import { useRouter } from "next/navigation";
import { auditAllTools,AuditResult } from "@/lib/audit";

export default function Audit(){
    type Tool={
        id?:number,
        toolName:string,
        cost:string,
        plan:string,
        seats:string,
        useCase:string
    }

    type Errors={
        toolName:string,
        cost:string,
        plan:string,
        seats:string,
        useCase:string
    }

    const[form,setForm]=useState<Tool>(
        {
            toolName:"",
            cost:"",
            plan:"",
            seats:"",
            useCase:""
        }
    )

    const[errors,setErrors]=useState<Errors>(
        {
            toolName:"",
            cost:"",
            plan:"",
            seats:"",
            useCase:""
        }
    )

   

    const[tools,setTools]=useState<Tool[]>([])
    const[filter,setFilter]=useState("All")
    const [search, setSearch] = useState("")
    const[isLoaded,setIsLoaded]=useState(false);
    const selectedTool=pricingData.find((tool)=>tool.name===form.toolName)
    const [auditResults, setAuditResults] = useState<any[]>([]);
    const [summary, setSummary] = useState("");
    const [auditData, setAuditData] = useState<{
    results: AuditResult[];
    totalMonthlySavings: number;
    totalAnnualSavings: number;
    finalMessage: string;
} | null>(null);

    const router = useRouter();


async function handleAudit() {
  const auditResult = auditAllTools(tools);

  localStorage.setItem("auditTools", JSON.stringify(tools));

  const response = await fetch("/api/summary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tools,
      results: auditResult.results,
      totalMonthlySavings: auditResult.totalMonthlySavings,
      totalAnnualSavings: auditResult.totalAnnualSavings,
    }),
  });

  const data = await response.json();

  const auditResponse = await fetch("/api/auditRes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tools,
      results: auditResult.results,
      totalMonthlySavings: auditResult.totalMonthlySavings,
      totalAnnualSavings: auditResult.totalAnnualSavings,
      summary: data.summary,
    }),
  });

  const savedAudit = await auditResponse.json();

  router.push(`/auditRes/${savedAudit.audit.id}`);
}

    

    //save tools to localstorage when tools state changes
    useEffect(()=>{
        if(isLoaded){
         localStorage.setItem("tools",JSON.stringify(tools))
        }
    },[tools,isLoaded])


    //loads tools from local storage when page opens
    useEffect(()=>{
        const data=localStorage.getItem("tools");
        if(data){
            setTools(JSON.parse(data));
        }
        setIsLoaded(true);
    },[])

    //loads tools from database when page opens
        useEffect(() => {
                async function fetchTools() {
                    const response = await fetch("/api/tools");

                    const data = await response.json();

                    if (data.success) {
                        setTools(data.data);
                    }
                }

                fetchTools();
            }, []);
        

    const filteredTools=filter==="All"?
    tools:filter === "Free"?
    tools.filter(tool=>Number(tool.cost)===0)
    :tools.filter(tool=>Number(tool.cost)>0)


    const searchedTools = filteredTools.filter((tool) =>
       tool.toolName.toLowerCase().includes(search.toLowerCase())
     )

    const totalCost = tools.reduce((sum, tool) => {
            return sum + Number(tool.cost);
       }, 0);

    const totalSeats = tools.reduce((sum, tool) => {
            return sum + Number(tool.seats);
       }, 0);

    const paidTools = tools.reduce((count, tool) => {
           const cost = Number(tool.cost);
            if (cost > 0) {
                return count + 1;
            }
         return count;
    }, 0);




    return(
        <div className="min-h-screen  mx-auto w-full  max-w-lg flex flex-col items-center bg-gray-100  shadow p-4 ">
            <h1 className="text-2xl font-bold m-4">SaaS Audit Tool</h1>
            <Link
                href="/"
                className="inline-block bg-gray-800 text-white px-4 py-2 rounded mb-4"
                >
                Back to Home
            </Link>

            <div>
              <SummaryCards
                    totalTools={tools.length}
                    totalCost={totalCost}
                    totalSeats={totalSeats}
                    paidTools={paidTools}
                />
            </div>
           

           {/*Form inputs*/}
            <select
                value={form.toolName}
                className="w-full px-3 py-3  rounded-lg shadow bg-white"
                
                onChange={(e) => {

                     const selectedName = e.target.value;

                    const tool = pricingData.find(
                    (item) => item.name === selectedName
                    );

                
                    setForm({ ...form, 
                      toolName: selectedName,
                      useCase:tool?tool.category:"",
                      plan:"",
                      cost:"" });
                    setErrors({
                    ...errors,
                    toolName: ""
                    });
                }}
                >
                <option value="">Select Tool</option>

                {pricingData.map((tool) => (
                    <option
                    key={tool.name}
                    value={tool.name}
                    >
                    {tool.name}
                    </option>
                ))}
                </select>
            {
            errors.toolName &&(
                <p className="text-red-500 text-sm">{errors.toolName}</p>
            )}
             <br />




            <select
            value={form.plan}
            className="w-full px-1 py-3  rounded-lg shadow bg-white"
            onChange={(e) => {
                const selectedPlanName=e.target.value;

                const selectedPlan = selectedTool?.plans.find(
                (plan) => plan.name === selectedPlanName
                );
                
                const totalCost = selectedPlan
                    ? selectedPlan.price * Number(form.seats)
                    : 0;
               

                setForm({
                    ...form,
                    plan: selectedPlanName,
                    cost: totalCost.toString(),
                });
                setErrors({
                ...errors,
                plan: ""
                });
            }}
            >
            <option value="">Select a Plan</option>

            {selectedTool?.plans.map((plan, index) => (
                <option
                key={index}
                value={plan.name}
                >
                {plan.name}
                </option>
            ))
            
            }
            </select>
            {errors.plan &&(
                <p className="text-red-500 text-sm">{errors.plan}</p>
            )}
                <br />  


           <input
                type="number" min="1"
                placeholder="Seats"
                value={form.seats}
                className="w-full px-3 py-2  rounded-lg shadow bg-white"
                onChange={(e) => {
                    const seatsValue = e.target.value;
                                    
                    const selectedPlan = selectedTool?.plans.find(
                    (plan) => plan.name === form.plan
                    );

                    const totalCost = selectedPlan
                    ? selectedPlan.price * Number(seatsValue)
                    : 0;

                    setForm({
                    ...form,
                    seats: seatsValue,
                    cost: totalCost.toString(),
                    });

                    setErrors({
                    ...errors,
                    seats: "",
                    });
                    return;
                }}
                />
                 {errors.seats &&(
                <p className="text-red-500 text-sm">{errors.seats}</p>
            )}
           <br />


             <input
                type="text"
                placeholder="$ Cost"
                value={form.cost}
                readOnly
                className="w-full px-3 py-2 rounded-lg shadow bg-white cursor-not-allowed"
             />
         <br />

            <input
                type="text"
                placeholder="Use Case"
                value={form.useCase}
                readOnly
                className="w-full px-3 py-2  rounded-lg shadow bg-white cursor-not-allowed"

                />
            <br/>

          
        <div className="flex gap-3">
        <button onClick={async()=>

        {
            
              if (form.toolName==="") {
                    setErrors({
                        ...errors,
                        toolName: "Select Tool Name"
                    });
                
                    return;
                  }
            else{
                setErrors({
                        ...errors,
                        toolName: ""
                    });
            }
             
            if (form.plan==="") {
                    setErrors({
                        ...errors,
                        plan: "Select Plan"
                    });
                
                    return;
                }
            else{
                setErrors({
                        ...errors,
                       plan: ""
                    });
            }



                if (isNaN(Number(form.cost)) || Number(form.cost) < 0) {
                    setErrors({
                        ...errors,
                        cost: "Invalid cost"
                    });

                    return;
                }
                else{
                    setErrors({
                        ...errors,
                        cost: ""
                    });
                }

                if (!(form.seats)) {
                    setErrors({
                        ...errors,
                        seats: "Seats value must be given",
                    });

                    return;
                    }
                setErrors({
                        ...errors,
                       seats: ""
                    });
                
                
                setErrors({
                    toolName: "",
                    cost: "",
                    plan: "",
                    seats: "",
                    useCase: ""
                });

                const response = await fetch("/api/tools", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
                });


                const data = await response.json();

                    if (!data.success) {
                    alert("Tool not saved to database");
                    return;
                }

                setTools([...tools, data.data[0]]);

                setForm({
                toolName: "",
                cost: "",
                plan: "",
                seats: "",
                useCase: ""
                });
             } 

        } 
        
        className="bg-green-500 rounded px-3 py-1 text-white font-bold hover:bg-green-600 cursor-pointer">
            Add Tool
       </button>
            

        {/*clear all button*/}
        <button onClick={async()=>{
            const response = await fetch("/api/tools", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    clearAll: true
                })
                });

                const data = await response.json();

                if (data.success) {
                setTools([]);
                }
        }}
                className="bg-red-500 rounded px-3 py-1 text-white font-bold hover:bg-red-600 cursor-pointer ">

                Clear All
        </button>

         {/* Audit button*/}   
        <button
               onClick={handleAudit}
               className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 font-bold"
             >
              Audit Tools
        </button>


        {/*filter tools*/}
         </div>


            <div className="flex justify-between items-center gap-3 mt-3">

            <button onClick={()=>setFilter("All")}
                className="bg-blue-500 rounded px-3 py-1 text-white font-bold hover:bg-blue-600 cursor-pointer">
                    All Tools
             </button>

            <button onClick={()=>setFilter("Free")}
                className="bg-blue-500 rounded px-3 py-1 text-white font-bold hover:bg-blue-600 cursor-pointer">
                    Free Tools
            </button>

            <button onClick={()=>setFilter("Paid")}
                className="bg-blue-500 rounded px-3 py-1 text-white font-bold hover:bg-blue-600 cursor-pointer">
                    Paid Tools
            </button>

         </div>


        {/*search Button*/}
           <input
                type="text"
                placeholder="Search tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white shadow p-2 rounded mt-5 "
             />


        {/*Result of search,filter toolcard*/} 
        {
              tools.length===0?
              <div>
              <p className="text-gray-600 font-bold mt-5 text-center">No tools added yet.</p>
              <p className="text-gray-600 font-bold text-center"> Add your SaaS tools to start the audit.</p>
              </div>
            :
            <div>
               <p className="text-lg font-semibold m-4 ">Tools added: {tools.length}</p> 

               {
                searchedTools.length === 0 ? (
                    <p className="text-gray-500 mt-4">
                        No matching tools found
                    </p>
                ) :
                searchedTools.map((tool,index)=>(
                   <ToolCard
                   key={index}
                   tool={tool}
                   onRemove={async () => {

                        const response = await fetch("/api/tools", {
                            method: "DELETE",

                            headers: {
                            "Content-Type": "application/json"
                            },

                            body: JSON.stringify({
                            id: tool.id
                            })
                        });

                        const data = await response.json();

                        if (data.success) {
                            setTools(
                            tools.filter(
                                (item) => item.id !== tool.id
                            )
                            );
                        }

                        }
                }
                   />
                ))

                 }
            </div>
        }              
                          
        </div>
    );
}