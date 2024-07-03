"use client";
import PrimaryButton from "@/app/utils/PrimaryButton";
import { useState } from "react";

export default function Login() {
  const [userId, setUserId] = useState("");
  function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("userId", userId.toLowerCase());
    window.location.reload();
  }

  return (
    <div className="bg-custom-gradient p-5 w-[320px] rounded-md flex items-center justify-center flex-col">
      <h1>Login to your account.</h1>
      <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
        <input
          className="bg-custom-gradient p-2 outline-none text-sm border-2 mt-4 rounded-sm"
          placeholder="Enter your username..."
          onChange={(e) => setUserId(e.target.value)}
        />
        <PrimaryButton text={"Login"} />
      </form>
    </div>
  );
}
