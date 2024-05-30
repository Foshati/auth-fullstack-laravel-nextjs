"use client";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginContext = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, loginContext }}>
      {children}
    </AuthContext.Provider>
  );
};
