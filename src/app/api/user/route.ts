import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // const { id } = await req.json();
    const body = await req.json();
    console.log(body);
    const user = await prisma.user.findUnique({
      where: {
        id: body.id,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Falied to Get User" }, { status: 500 });
  }
}
