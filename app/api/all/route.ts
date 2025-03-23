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

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const data: IPost = await request.json();

    if (!data.title || !data.description || !data.type) {
      return NextResponse.json(
        { message: "Title, Type and description are required" },
        { status: 400 }
      );
    }

    const newPost = new Post({
      title: data.title,
      description: data.description,
      type: data.type,
    });

    const savedPost = await newPost.save();

    console.log("New post created: ", savedPost);

    return NextResponse.json(savedPost, { status: 201 });
  } catch (e) {
    console.error("Error creating post: ", e);
    return NextResponse.json(
      { message: "Internal Server error" },
      { status: 500 }
    );
  }
}