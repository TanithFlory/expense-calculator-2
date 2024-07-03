import { NextResponse } from "next/server";
import mongoConnection from "../db";
import { User } from "../models/user";

export const dynamic = "force-dynamic";
export async function GET() {
  try {
    await mongoConnection();

    const users = await User.find({});

    return NextResponse.json({
      message: "Success",
      users,
    });
  } catch (error) {
    console.log(error);
    NextResponse.json({
      message: "Server Error",
    });
  }
}
