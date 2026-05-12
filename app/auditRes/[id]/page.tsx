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
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Shareable Audit Result
      </h1>
    
      <a
        href="/audit"
        className="inline-block mt-6 bg-gray-800 text-white px-4 py-2 rounded"
        >
        Back to Audit
      </a>
     
     
      <p className="mt-3">
        Monthly Savings: ${audit.total_monthly_savings}
      </p>

      <p>
        Annual Savings: ${audit.total_annual_savings}
      </p>

      <div className="mt-4 border rounded p-4 bg-blue-50">
        <h2 className="font-bold">Summary</h2>
        <p>{audit.summary}</p>
      </div>

      <h2 className="text-xl font-bold mt-6">
        Recommendations
      </h2>

      {audit.results?.map((result: any, index: number) => (
        <div
          key={index}
          className="border rounded p-4 mt-3 bg-white shadow w-lg "
        >
          <p>Tool: {result.toolName}</p>
          <p>Alternative: {result.alternativeTool || "None"}</p>
          <p>Savings: ${result.savings}</p>
          <p className="text-gray-600 font-semibold">{result.message}</p>
        </div>
      ))}

      <LeadForm />
    </div>
  );
}