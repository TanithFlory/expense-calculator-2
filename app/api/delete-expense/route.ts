import { NextResponse } from "next/server";
import mongoConnection from "../db";
import { User } from "../models/user";

export async function DELETE(req: Request, res: Response) {
  try {
    await mongoConnection();
    const { userId, expenseId } = await req.json();

    const user = await User.findOne({ userId });
    const expense = user.expenses.id(expenseId);

    if (!expense) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 });
    }

    const expensePrice = expense.price;

    await User.updateOne(
      { userId },
      {
        $pull: { expenses: { _id: expenseId } },
        $inc: { totalExpenses: -expensePrice },
      }
    );

    return NextResponse.json({
      message: "Success",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
