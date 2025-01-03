import { connectDB } from "@/config/database";
import User from "@/models/User";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //  Invoked in successful sigh in
    async signIn({ profile }) {
      // 1. Connect to database
      await connectDB();
      // 2. Check if user exists
      const userExists = await User.findOne({ email: profile.email });
      // 3. If not , than add the suer to database
      if (!userExists) {
        // truncate the user name if it is too long
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.image,
        });
      } else {
      }
      // 4. Return true to allow sigh in
      return true;
    },
    // Modifies the session object
    async session({ session }) {
      // 1. Get uer from database
      const user = await User.findOne({ email: session.user.email });
      // 2. Assign the user id to the session
      session.userId = user._id.toString();
      // 3. Return session
      return session;
    },
  },
};
