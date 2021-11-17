import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  ///Register
  const register = async ({ username, email, password }) => {
    //console.log({ username, email, password });

    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/");
      setError(null);
    } else {
      setError(data.message);
    }
  };

  //Login
  const login = async ({ username: identifier, password }) => {
    //console.log({ identifier, password });

    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (res.ok) {
      setUser(data.user);
      router.push("/dashboard");
    } else {
      setError(data.message);
    }
  };
  //Logout

  const logout = async () => {
    //console.log("logout");
  };

  //Is logged in?
  const checkUserLoggedIn = async () => {
    //console.log("check");
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
