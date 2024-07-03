"use client";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;
    
    setIsLogged(true);
  }, []);

  return { isLogged };
}
