import { useContext } from "react";
import SignIn from "../components/SignIn";
import Dashboard from "./dashboard";
import AuthContext from "@/context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);
  return <div>{user ? <Dashboard /> : <SignIn />}</div>;
}
