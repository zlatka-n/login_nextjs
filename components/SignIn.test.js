import React from "react";
import SignIn from "../components/SignIn";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AuthProvider from "../context/AuthContext";

test.skip("on initial render, the  button is disabled", () => {
  render(<SignIn />, { wrapper: AuthProvider });
  //////git commit --amend
});
