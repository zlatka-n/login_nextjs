import { useContext } from "react";
import SignIn from "../components/SignIn";
import Dashboard from "./dashboard";
import AuthContext from "@/context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);
  const title = "Sign In";
  const button = "Log In";

  return (
    <div>
      <SignIn title={title} button={button} />
    </div>
  );
}
