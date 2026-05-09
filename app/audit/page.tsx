"use client";
import {useState,useEffect} from "react";
import ToolCard from "@/components/ToolCard";

export default function Audit(){
    type Tool={
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

    const[tools,setTools]=useState<Tool[]>([])
    const[filter,setFilter]=useState("All")
    const [search, setSearch] = useState("")
    const[isLoaded,setIsLoaded]=useState(false);


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
    tools:
    tools.filter((tool)=>tool.plan.toLowerCase()===filter.toLowerCase())


    const searchedTools = filteredTools.filter((tool) =>
       tool.toolName.toLowerCase().includes(search.toLowerCase())
     )


    return(
        <div className="min-h-screen  mx-auto w-full  max-w-lg flex flex-col items-center bg-gray-100  shadow p-4 ">
            <h1 className="text-2xl font-bold m-4">SaaS Audit Tool</h1>

            <input type="text"
            placeholder="Enter Tool Name"
            value={form.toolName}  className="bg-white shadow p-2 rounded mb-2"
            onChange={(e)=>
            setForm({...form,toolName:e.target.value})}
            />
             <br />

            <input type="text"
            placeholder="Enter cost"
            value={form.cost}  className="bg-white shadow p-2 rounded mb-2"
            onChange={(e)=>
            setForm({...form,cost:e.target.value})}
            />
            <br />

            <input type="text"
            placeholder="Enter plan"
            value={form.plan}  className="bg-white shadow p-2 rounded mb-2"
            onChange={(e)=>
            setForm({...form,plan:e.target.value})}
            />
                <br />  


            <input type="text"
            placeholder="Enter No of seats"
            value={form.seats}  className="bg-white shadow p-2 rounded mb-2"
            onChange={(e)=>
            setForm({...form,seats:e.target.value})}
            />
           <br />


            <input type="text"
            placeholder="Enter Use Case"
            value={form.useCase}  className="bg-white shadow p-2 rounded mb-2"
            onChange={(e)=>
            setForm({...form,useCase:e.target.value})}
            />
            <br />


        <div className="flex gap-3">
             <button onClick={()=>{
                    
             if(!form.toolName || !form.cost || !form.plan || !form.seats || !form.useCase) return;

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