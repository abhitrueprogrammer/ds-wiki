import { connectToDatabase } from "@/app/lib/mongoose";
import Post from "@/db/posts";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();

    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "Post ID is required" },
        { status: 400 }
      );
    }

    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404 }
      );
    }

    await Post.findByIdAndDelete(id);

    console.log("Post deleted: ", id);
    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error deleting post: ", e);
    return NextResponse.json(
      { message: "Internal Server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
      await connectToDatabase();
  
      const { id } = params;
      const data = await request.json(); 
  
      if (!id) {
        return NextResponse.json(
          { message: "Post ID is required" },
          { status: 400 }
        );
      }
      if (!data.title || !data.description || !data.type) {
        return NextResponse.json(
          { message: "Title, description, and type are required" },
          { status: 400 }
        );
      }
  
      const post = await Post.findById(id);
      if (!post) {
        return NextResponse.json(
          { message: "Post not found" },
          { status: 404 }
        );
      }
  
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        {
          title: data.title,
          description: data.description,
          type: data.type,
        },
        { new: true } 
      );
  
      console.log("Post updated: ", updatedPost);
      return NextResponse.json(updatedPost, { status: 200 });
    } catch (e) {
      console.error("Error updating post: ", e);
      return NextResponse.json(
        { message: "Internal Server error" },
        { status: 500 }
      );
    }
  }