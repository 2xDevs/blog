import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env";
import { prisma } from "@/server/db";
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secr3t",
  // pages: {
  //   signIn: "/signin",
  // },
  callbacks: {
    async signIn({ user }: any) {
      const existingUser = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });

      console.log("user", user);
      if (existingUser) {
        return true;
      }

      try {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            avatar: user.image,
          },
        });

        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    async jwt({ token }: any) {
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.sub;
      }
      console.log(session, token);
      return session;
    },
  },
};
