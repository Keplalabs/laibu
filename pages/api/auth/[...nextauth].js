import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//Api route function that is returned from next auth
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return (
          profile.email_verified &&
          (profile.email.endsWith("@students.uonbi.ac.ke") ||
            profile.email.endsWith("@uonbi.ac.ke"))
        );
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    // called after sucessful signin
  },
});
