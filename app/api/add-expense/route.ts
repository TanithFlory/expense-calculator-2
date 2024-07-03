import { NextResponse } from "next/server";
import mongoConnection from "../db";
import { User } from "../models/user";
export async function POST(req: Request, res: Response) {
  try {
    await mongoConnection();
    const { userId, title, price, date } = await req.json();
    const expensePrice = parseFloat(price);

    await User.updateOne(
      { userId },
      {
        $push: {
          expenses: {
            title,
            price,
            date,
          },
        },
        $inc: {
          totalExpenses: expensePrice,
        },
      }
    );
    return NextResponse.json("Success");
  } catch (error) {}
}
