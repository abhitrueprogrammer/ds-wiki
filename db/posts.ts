import mongoose, { Schema, type Model } from "mongoose";
import { type IPost } from "@/interface/types";

const paperSchema = new Schema<IPost>({
  title: { type: String, required: true , index: true},
  description: { type: String, required: true },
});

const Post: Model<IPost> =
  mongoose.models.Admin ?? mongoose.model<IPost>("Post", paperSchema);

export default Post;
