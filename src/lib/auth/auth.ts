import { DefaultSession, NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";


declare module "next-auth" {
    interface Session extends DefaultSession {
        user?: {
            id: string;
        } & DefaultSession["user"];
    }
}


const prisma = new PrismaClient()
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    adapter: PrismaAdapter(prisma),
}

