import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {

    //@ts-expect-error
  const session = await getServerSession(authOptions);
    //@ts-ignore
  if (!session?.user.id) {
    return NextResponse.json(
      {
        message: "Unauthenticated",
      },
      {
        status: 403,
      },
    );
  }
  return NextResponse.json({
    user: session.user,
  });
};

// dont static render
export const dynamic = "force-dynamic";