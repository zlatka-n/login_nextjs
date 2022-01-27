import SignIn from "../components/SignIn";
import { render, screen } from "@testing-library/react";
import { AuthProvider } from "../context/AuthContext";

test("Sign in form", () => {
  render(<SignIn />, { wrapper: AuthProvider });

  ///Sign in button is disabled at first

  //Sign in button is enabled when username and password filled in

  ///When username or password is wrong, warning "Identifier or password invalid" will show up
});
