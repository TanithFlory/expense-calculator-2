import { NextResponse } from "next/server";
import mongoConnection from "../db";
import { User } from "../models/user";
export async function POST(req: Request, res: Response) {
  try {
    await mongoConnection();
    const { userId, totalExpenses, paymentLink } = await req.json();

    const user = new User({ userId, totalExpenses, paymentLink });

    await user.save();

    return NextResponse.json({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    NextResponse.json({
      message: "Server Error",
    });
  }
}
