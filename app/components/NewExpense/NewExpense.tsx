"use client";
import PrimaryButton from "@/app/utils/PrimaryButton";
import { useState } from "react";

export default function NewExpense() {
  const [formData, setFormData] = useState({
    userId: localStorage.getItem("userId"),
    title: "",
    price: "",
  });
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  async function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/add-expense", {
      body: JSON.stringify(formData),
      method: "POST",
    });
    window.location.reload();
  }

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
        <h3 className="font-bold border-b-[1px]">Add a new expense</h3>
        <div className="flex items-center">
          <div className="w-[40px]">₹</div>
          <input
            placeholder="Type amount..."
            className="bg-custom-gradient p-2 outline-none"
            type="number"
            name="price"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex items-center">
          <div className="w-[40px]">Title</div>
          <input
            placeholder="Enter title..."
            name="title"
            required
            className="bg-custom-gradient p-2 outline-none"
            onChange={onChangeHandler}
          />
        </div>
        <PrimaryButton text={"Add Expense"} />
      </form>
    </div>
  );
}
