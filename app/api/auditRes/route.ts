import supabase from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      tools,
      results,
      totalMonthlySavings,
      totalAnnualSavings,
      summary,
    } = body;

    const { data, error } = await supabase
      .from("audits")
      .insert([
        {
          tools,
          results,
          total_monthly_savings: totalMonthlySavings,
          total_annual_savings: totalAnnualSavings,
          summary,
        },
      ])
      .select()
      .single();

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      message: "Audit result saved successfully",
      audit: data,
    });
  } catch {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}