"use client";
import {useState,useEffect} from "react";
import ToolCard from "@/components/ToolCard";
import SummaryCards from "@/components/SummaryCards";
import { 
    getAuditRecommendation,
    hasDuplicateUseCase 
} 
    from "@/lib/audit";
import {pricingData} from "@/data/pricing"

export default function Audit(){
    type Tool={
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

    const enterpriseTools = tools.reduce((count, tool) => {
            if (tool.plan.toLowerCase() === "enterprise") {
                return count + 1;
            }

            return count;
            }, 0);



    return(
        <div className="min-h-screen  mx-auto w-full  max-w-lg flex flex-col items-center bg-gray-100  shadow p-4 ">
            <h1 className="text-2xl font-bold m-4">SaaS Audit Tool</h1>


            <div>
              <SummaryCards
                    totalTools={tools.length}
                    totalCost={totalCost}
                    totalSeats={totalSeats}
                    enterpriseTools={enterpriseTools}
                />
            </div>
           
            <select
                value={form.toolName}
                className="bg-white shadow p-2 rounded"
                onChange={(e) => {
                    setForm({ ...form, 
                      toolName: e.target.value,
                      useCase:selectedTool?selectedTool.category:"",
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
            className="bg-white shadow p-2 rounded"
            onChange={(e) => {
                const selectedPlanName=e.target.value;

                const selectedPlan = selectedTool?.plans.find(
                (plan) => plan.name === selectedPlanName
                );

                const totalCost = selectedPlan
                    ? selectedPlan.pricePerUser * Number(form.seats)
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
                type="number"
                placeholder="Seats"
                value={form.seats}
                className="bg-white shadow p-2 rounded mb-2"
                onChange={(e) => {
                    const seatsValue = e.target.value;

                    const selectedPlan = selectedTool?.plans.find(
                    (plan) => plan.name === form.plan
                    );

                    const totalCost = selectedPlan
                    ? selectedPlan.pricePerUser * Number(seatsValue)
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
                }}
                />
           <br />


             <input
                type="text"
                placeholder="Cost"
                value={form.cost}
                readOnly
                className="bg-gray-100 shadow p-2 rounded mb-2"
         />

            <input
                type="text"
                placeholder="Use Case"
                value={form.useCase}
                readOnly
                className="bg-gray-100 shadow p-2 rounded mb-2"

                />


          
        <div className="flex gap-3">
             <button onClick={()=>{

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

                if (isNaN(Number(form.cost)) || Number(form.cost) < 0) {
                    setErrors({
                        ...errors,
                        cost: "Invalid cost"
                    });

                    return;
                }

                if (isNaN(Number(form.seats)) || Number(form.seats) < 1) {
                    setErrors({
                        ...errors,
                        seats: "Invalid seats"
                    });

                    return;
                }
                if (form.useCase.trim().length<5) {
                    setErrors({
                        ...errors,
                        useCase: "Use case must have at least 5 characters"
                    });
                    return;
                }
                setErrors({
                    toolName: "",
                    cost: "",
                    plan: "",
                    seats: "",
                    useCase: ""
                });

                setTools([...tools,form]);
                setForm({
                    toolName:"",
                    cost:"",
                    plan:"",
                    seats:"",
                    useCase:""
                })
             } 

            } 
                className="bg-green-500 rounded px-3 py-1 text-white font-bold hover:bg-green-600 cursor-pointer">
            Add Tool
             </button>
            
            <button onClick={()=>{
                setTools([]);
                localStorage.removeItem("tools");
            }}
                className="bg-red-500 rounded px-3 py-1 text-white font-bold hover:bg-red-600 cursor-pointer ">

                Clear All
            </button>
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


           <input
                type="text"
                placeholder="Search tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white shadow p-2 rounded mt-5"
             />

          
            {
              tools.length===0?
              <p className="text-gray-600 font-bold mt-5">No tools added yet.</p>
              
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
                   recommendation={getAuditRecommendation(tool)}
                   hasDuplicate={hasDuplicateUseCase(tool,tools)}
                   onRemove={()=>
                   {
                    setTools(tools.filter((_, i) => i !== index))
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