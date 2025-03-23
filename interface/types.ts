import { Document } from "mongoose";

export interface IPost extends Document {
  _id: string;
  title: string;
  description: string;
  type: string;
}


export interface ICreatePost {
  description: string;
  title: string;
  type: string;
}