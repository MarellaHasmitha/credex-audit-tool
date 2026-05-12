import supabase from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, teamSize } = body;

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name,
          email,
          company,
          team_size: Number(teamSize),
        },
      ])
      .select();

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      message: "Lead saved successfully",
      lead: data[0],
    });
  } catch {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}