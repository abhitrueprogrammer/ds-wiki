import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDatabase } from "@/app/lib/mongoose";
import Authorized from "@/db/authorized-users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ profile }) {
      if (!profile?.email) {
        return false;
      }
      await connectToDatabase();

      const user = await Authorized.findOne({ email: profile?.email });

      if (!user) {
        return false;
      }
      return true;
    },
  },
});
