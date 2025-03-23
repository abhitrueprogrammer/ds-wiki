import { Document } from "mongoose";

export interface IPost extends Document {
  _id: string;
  title: string;
  description: string;
}