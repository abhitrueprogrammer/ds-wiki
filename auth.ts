import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import client from "@/app/services/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ profile }) {
      if (!profile?.email) {
        return false;
      }

      try {
        const response = await client.get<{ authorized: boolean }>(
          `${process.env.SERVER_URL}/api/check-authorized`,
          {
            params: { email: profile.email },
          },
        );

        return response.data.authorized;
      } catch (error) {
        console.error("Authorization check failed:", error);
        return false;
      }
    },
  },
});
