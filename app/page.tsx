"use client";
import useAuth from "./useAuth";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

export default function Page() {
  const { isLogged } = useAuth();

  return (
    <main className="flex items-center justify-center min-h-screen">
      {isLogged ? <Home /> : <Login />}
    </main>
  );
}
