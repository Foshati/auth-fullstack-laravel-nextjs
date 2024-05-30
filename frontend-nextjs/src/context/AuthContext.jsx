"use client";
import { authentication } from "@/actions/Register";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginContext = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const data = await authentication();
      //?   console.log(data?.user, "From Context data.user");
      if (data?.error) {
        setUser(null);
      } else {
        setUser(data?.user);
      }
    };
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginContext }}>
      {children}
    </AuthContext.Provider>
  );
};
