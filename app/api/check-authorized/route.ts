import { connectToDatabase } from "@/app/lib/mongoose";
import Authorized from "@/db/authorized-users";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  try {
    await connectToDatabase();
    const user = await Authorized.findOne({ email });
    const isAuthorized = !!user;
    console.log(isAuthorized);
    return NextResponse.json({ authorized: isAuthorized }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ authorized: false }, { status: 500 });
  }
}
