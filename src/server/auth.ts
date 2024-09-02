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
      try {
        // Check if the user exists in the database
        let existingUser = await prisma.user.findUnique({
          where: {
            email: user.email,
          },
        });

        if (!existingUser) {
          // Create a new user if it doesn't exist
          existingUser = await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              avatar: user.image,
            },
          });
        }

        // Add the user ID to the token
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    async jwt({ token, user }: any) {
      // Add user ID to the token if it exists
      if (user) {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email,
          },
          select: { id: true },
        });
        if (existingUser) {
          token.id = existingUser.id;
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the user ID from the token to the session
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
