import supabase from "@/lib/supabase";

export async function POST(request:Request) {
  try {

    const tool=await request.json();

    const { data, error } = await supabase
      .from("tools")
      .insert([
        {
          toolName: tool.toolName,
          cost: Number(tool.cost),
          plan: tool.plan,
          seats: Number(tool.seats),
          useCase: tool.useCase
        }
      ])
      .select();

    if (error) {
      return Response.json({
        success: false,
        error: error.message
      });
    }

    return Response.json({
      success: true,
      data
    });

  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message
    });
  }
}


export async function GET() {
  try {
    const { data, error } = await supabase
      .from("tools")
      .select("*");

    if (error) {
      return Response.json({
        success: false,
        error: error.message
      });
    }

    return Response.json({
      success: true,
      data
    });

  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message
    });
  }
}


export async function DELETE(request: Request) {
  try {

    const body = await request.json();

    let query = supabase
      .from("tools")
      .delete();

    // Clear all tools
    if (body.clearAll) {
      query = query.neq("id", 0);
    }

    // Delete single tool
    else {
      query = query.eq("id", body.id);
    }

    const { error } = await query;

    if (error) {
      return Response.json({
        success: false,
        error: error.message
      });
    }

    return Response.json({
      success: true
    });

  } catch (error: any) {

    return Response.json({
      success: false,
      error: error.message
    });

  }
}