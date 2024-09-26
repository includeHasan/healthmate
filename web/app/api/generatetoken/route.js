import { NextResponse } from "next/server";
import { generateToken04 } from "./zegoServerAssistant";

export async function POST(req) {
    const { userId } = await req.json();
    if (!userId) {
        return NextResponse.json({ msg: "Not Valid User" }, { status: 400 })
    }
    const appId = 1922861951;
    const serverSecret = "0799abbcf0c548580c7bf19d5ee9af3e";
    const effectiveTimeInSecond = 36000;
    const token = generateToken04(appId, userId, serverSecret, effectiveTimeInSecond, "");
    console.log(userId, token);
    return NextResponse.json({ msg: "Successfully Generated Token ", token }, { status: 200 })
}