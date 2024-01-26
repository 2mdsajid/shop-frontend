// /app/api/route.ts
import { NextRequest, NextResponse } from "next/server";
import { generateCheckoutToken } from "@/lib/utils";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();
        const token =await  generateCheckoutToken(body)
        return NextResponse.json({ token });
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}