import { connectToDatabase } from "@/app/lib/mongoose";
import Post from "@/db/posts";
import { IPost } from "@/interface/types";
import { NextResponse } from "next/server";



export async function GET() {
  try {
    await connectToDatabase();

    const Posts: IPost[] = await Post.find();
    console.log("GET post count: ", Posts.length);
    return NextResponse.json(Posts, { status: 200 });
  } catch (e) {
    if(e)
    return NextResponse.json(
      {
        message: `Internal Server error `,
      },
      {
        status: 500,
      },
    );
  }
}
