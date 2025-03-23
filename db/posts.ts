import mongoose, { Schema, type Model } from "mongoose";
import { type IPost } from "@/interface/types";

const postSchema = new Schema<IPost>({
  title: { type: String, required: true , index: true},
  description: { type: String, required: true },
  type: { type: String, required: true },
});

const Post: Model<IPost> =
  mongoose.models.Post ?? mongoose.model<IPost>("Post", postSchema);

export default Post;
