"use client";
import {useState} from "react";
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
                className="bg-green-400 rounded px-3 py-1 text-white font-bold hover:bg-green-600 cursor-pointer">
            Add Tool
             </button>

             <p className="text-lg font-semibold m-4">Tools added: {tools.length}</p>
            
            <h2 className="text-xl font-bold mb-3">
                Added Tools
            </h2>
            {
   
                tools.map((tool,index)=>(
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
    );
}