import mongoose, { Schema, type Document, type Model } from "mongoose";

interface IUser extends Document {
  email: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
});

const Authorized: Model<IUser> =
  mongoose.models?.Authorized ?? mongoose.model<IUser>("Authorized", userSchema);

export default Authorized;