import { NextResponse } from "next/server";
import mongoConnection from "../db";
import { User } from "../models/user";
export async function GET(req: Request, res: Response) {
  try {
    await mongoConnection();
    const { searchParams } = new URL(req.url as string);
    const userId = searchParams.get("userId") as string;

    const user = await User.findOne({ userId });
    if (!user) {
      return NextResponse.json({
        message: "User not found",
        expenses: [],
      });
    }
    return NextResponse.json({
      message: "Success",
      expenses: user.expenses,
      totalExpenses: user.totalExpenses,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Server Error",
    });
  }
}
