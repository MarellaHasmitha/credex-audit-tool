"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auditAllTools } from "@/lib/audit";
import LeadForm from "@/components/LeadForm";

export default function AuditResultPage() {
  const [auditData, setAuditData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
  const storedTools = localStorage.getItem("auditTools");

  if (!storedTools) {
    setIsLoading(false);
    return;
  }

  const tools = JSON.parse(storedTools);

  if (tools.length === 0) {
    setIsLoading(false);
    return;
  }

  const result = auditAllTools(tools);

  setAuditData(result);
  setIsLoading(false);
}, []);

if (isLoading) {
  return (
    <div className="p-6 text-center text-black align-center">
      <p>Analyzing your SaaS stack...</p>

      <button
        onClick={() => router.push("/audit")}
        className="mt-10 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
      >
        Back to Audit
      </button>
    </div>
  );
}

if (!auditData) {
  return (
    <div className="p-6 text-center text-gray-500">
      <p className="font-medium">No audit results found.</p>
      <p className="text-sm mt-1">
        Please add tools first and run the audit.
      </p>

      <button
        onClick={() => router.push("/audit")}
        className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
      >
        Back to Audit
      </button>
    </div>
  );
}


function getStatus(result: any)
 {
      if (result.savings > 0) {
        return {
          text: "Savings Found",
          style: "bg-green-100 text-green-700",
        };
      }

      if (result.currentCost === 0) {
        return {
          text: "Free Tool",
          style: "bg-blue-100 text-blue-700",
        };
      }

      return {
        text: "Optimized",
        style: "bg-gray-100 text-gray-700",
      };
}


return (
  <div className="p-6">

    <div className="flex justify-between  items-center">
      
      <h1 className="text-3xl font-bold mb-6">
        Audit Results
      </h1>

      <button
              onClick={() => router.push("/audit")}
              className="mb-6 bg-black text-white px-5 py-2 rounded hover:bg-gray-700 font-bold"
            >
              Back to Audit
      </button>

  


    </div>

    
      {auditData.results.map(
        (result: any, index: number) => (
          <div
            key={index}
            className="border rounded p-4 mb-4 shadow "
            >

            <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-bold">
                    {result.toolName}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      getStatus(result).style
                    }`}
                  >
                    {getStatus(result).text}
                  </span>
              </div>


            <p>
              Current Plan: {result.currentPlan}
            </p>

            <p>
              Current Cost: $
              {result.currentCost}
            </p>

            <p>
              Alternative Tool:{" "}
              {result.alternativeTool || "None"}
            </p>

            <p>
              Alternative Plan:{" "}
              {result.alternativePlan || "-"}
            </p>

            <p>
              Alternative Cost: $
              {result.alternativeCost}
            </p>

            <p>
              Savings: $
              {result.savings.toFixed(2)}
            </p>

            <p className="mt-2 font-medium">
              {result.message}
            </p>
          </div>
        )
      )}

      <div className="mt-8 border-t pt-4">
        <h2 className="text-2xl font-bold">
          Total Savings: $
          {auditData.totalMonthlySavings.toFixed(2)}
        </h2>

        <p className="mt-2">
          {auditData.finalMessage}
        </p>
      </div>
    
    <LeadForm />

    </div>
  );
}