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
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async session({ session, user }: any) {
            const { id } = user
            return session = {
                ...session,
                user: {
                    ...session.user,
                    id: id,
                }
            }
        },
    },
}

