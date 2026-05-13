import supabase from "@/lib/supabase";
import LeadForm from "@/components/LeadForm";

export default async function AuditResPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: audit, error } = await supabase
    .from("audits")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !audit) {
    return <p className="p-6">Audit result not found.</p>;
  }




  return (
    <div>
    <div className="mt-6 mx-auto w-fit rounded-lg p-4 bg-white shadow">

    <div className="flex justify-between items-center"> 
      <h1 className="text-2xl font-bold">
        Shareable Audit Result
      </h1>
    
      <a
        href="/audit"
        className="inline-block mt-6 bg-gray-800 text-white px-4 py-2 rounded"
        >
        Back to Audit
      </a>
    </div>
     
      <p className="mt-3">
        Monthly Savings: ${audit.total_monthly_savings.toFixed(2)}
      </p>

      <p>
        Annual Savings: ${audit.total_annual_savings.toFixed(2)}
      </p>

      <div className="mt-4 border rounded p-4 bg-blue-50">
        <h2 className="font-bold">Summary</h2>
        <p>{audit.summary}</p>
      </div>

    

      <h2 className="text-3xl font-bold mt-6 text-center">
        Recommendations
      </h2>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
  
    {audit.results?.map((result: any, index: number) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-gray-900">
          {result.toolName}
        </h3>

        <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
          Save ${result.savings.toFixed(2)}
        </span>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <p className="font-bold text-blue-800 mb-2">
          Current Plan
        </p>

        <p>Plan: {result.currentPlan}</p>
        <p>Cost: ${result.currentCost.toFixed(2)}</p>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 mb-4">
        <p className="font-bold text-blue-800 mb-2">
          Alternative Plan
        </p>

        {result.alternativeTool ? (
          <>
            <p>Tool: {result.alternativeTool}</p>
            <p>Plan: {result.alternativePlan}</p>
            <p>Cost: ${result.alternativeCost.toFixed(2)}</p>
          </>
        ) : (
          <p>No better alternative found</p>
        )}
      </div>

      <p className="text-gray-700 font-medium">
        {result.message}
      </p>
    </div>
  ))}
</div>
</div>


      <LeadForm />
    </div>
  );
}