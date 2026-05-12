export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      tools,
      results,
      totalMonthlySavings,
      totalAnnualSavings,
    } = body;

    const toolsCount = tools?.length || 0;
    const recommendationsCount = results?.filter(
      (result: any) => result.savings > 0
    ).length || 0;

    const summary =
      totalMonthlySavings > 0
        ? `Your audit reviewed ${toolsCount} tools and found ${recommendationsCount} saving opportunities. You can save approximately $${totalMonthlySavings.toFixed(
            2
          )} per month and $${totalAnnualSavings.toFixed(
            2
          )} per year by switching to better alternatives or optimizing current plans.`
        : `Your audit reviewed ${toolsCount} tools. Your current SaaS stack looks optimized, and no major savings opportunities were found.`;

    return Response.json({ summary });
  } catch (error) {
    return Response.json(
      {
        summary:
          "Unable to generate summary right now. Please try again.",
      },
      { status: 500 }
    );
  }
}