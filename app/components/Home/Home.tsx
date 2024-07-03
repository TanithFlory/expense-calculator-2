"use client";
import { useEffect, useState } from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import TotalExpenses from "../TotalExpenses/TotalExpenses";
import { Expense } from "@/types";
import Spinner from "@/app/utils/Spinner";
interface User {
  _id: string;
  userId: string;
  totalExpenses: number;
  paymentLink: string;
  expenses: Expense;
}

export default function Home() {
  const [userData, setUserData] = useState<User[]>();
  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      const response = await fetch("/api/get-users");

      const json = await response.json();
      setUserData(json.users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="max-w-[1200px] mx-auto py-20">
      <TotalExpenses />
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {userData &&
          userData.map(({ userId, totalExpenses, paymentLink }, key) => {
            return (
              <ExpenseCard
                userId={`${userId.charAt(0).toUpperCase()}${userId.slice(1)}`}
                totalExpenses={totalExpenses}
                paymentLink={`${paymentLink}&am=${totalExpenses / 6}`}
                key={key}
              />
            );
          })}
      </div>
    </div>
  );
}
