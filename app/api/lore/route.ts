import { connectToDatabase } from "@/app/lib/mongoose";
import Post from "@/db/posts";
import { IPost } from "@/interface/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const Posts: IPost[] = await Post.find();
    const filteredPosts = Posts.map(post => ({
      title: post.title,
      type: post.type,
      description: post.description,
    }));
    return NextResponse.json(filteredPosts, { status: 200 });
  } catch (e) {
    if (e)
      return NextResponse.json(
        {
          message: `Internal Server error `,
        },
        {
          status: 500,
        }
      );
  }
}
