import { NextResponse } from "next/server";

export async function POST(req) {
    const  response = await req.json();
    console.log(response);
    return NextResponse.json({msg : "Success"})
}