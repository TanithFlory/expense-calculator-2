"use client";
import Cross from "@/app/constants/Cross";
import formatDate from "@/app/helpers/formatDate";
import { useEffect, useState } from "react";
import { Expense } from "@/types";
import Spinner from "@/app/utils/Spinner";

export default function YourExpenses({
  userId,
  hideDelete,
  moneyUserOwes,
}: {
  userId?: string;
  hideDelete?: boolean;
  moneyUserOwes?: number;
}) {
  const [expenses, setExpenses] = useState<Expense[] | null>(null);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [loading, setLoading] = useState(true);
  async function getExpenses() {
    try {
      const response = await fetch(
        `/api/get-expenditure?userId=${
          userId || localStorage.getItem("userId")
        }`,
        {
          method: "GET",
        }
      );
      const json = await response.json();
      setExpenses(json.expenses);
      setTotalExpenses(json.totalExpenses);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function deleteExpense(expenseId: string) {
    try {
      await fetch("/api/delete-expense", {
        method: "DELETE",
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          expenseId,
        }),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getExpenses();
  }, []);

  if (loading && userId) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col justify-center items-start text-sm pb-4 ">
      <h1 className="text-center text-lg font-bold w-full mb-2">
        <span>
          {userId
            ? `${userId.charAt(0).toUpperCase()}${userId.slice(1)}'s expenses`
            : "Your expenses"}{" "}
          -{" "}
        </span>
        <span className="text-green-400">₹{totalExpenses || 0}</span>
      </h1>
      {!hideDelete && moneyUserOwes ? (
        <h3 className="text-center text-md font-bold w-full mb-2">
          <span>You have to pay - </span>
          <span className="text-red-600">
            ₹{(moneyUserOwes / 4).toFixed(2)}{" "}
          </span>
          in total.
        </h3>
      ) : null}
      {expenses &&
        expenses.map(({ price, title, date, _id }, key) => {
          return (
            <div
              id={_id}
              key={_id}
              className="flex items-center justify-between w-full mb-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-[25px]">{key + 1}.</div>
                <div>{title} -</div>
                <div className="text-green-400">₹ {price} </div>
                <div>- {formatDate(date)}</div>
              </div>
              {!hideDelete && (
                <div
                  className="h-[25px] w-[25px]"
                  onClick={(e) => deleteExpense(_id)}
                >
                  <Cross />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
