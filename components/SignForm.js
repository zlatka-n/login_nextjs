import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

function Login({
  title,
  description,
  signText,
  haveAccount,
  h1Title,
  linkHref,
  linkText,
}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordWarning, setPasswordWarning] = useState(null);
  const { login, register, error } = useContext(AuthContext);

  //////check if passwords match, show warning if not/////
  useEffect(() => {
    if (confirmPassword !== "") {
      setTimeout(() => {
        if (confirmPassword !== password) {
          setPasswordWarning(
            <p className="text-red-600 mb-5">Passwords not matching</p>
          );
        } else {
          setPasswordWarning(null);
        }
      }, 1000);
    }

    return () => {
      setPasswordWarning(null);
    };
  }, [confirmPassword]);

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log({ username, password });
    if (signText === "Sign in") {
      login({ username, password });
    } else if (signText === "Sign up") {
      register({ username, email, password });
    }
  };

  return (
    <div className="max-w-full max-h-screen overflow-hidden font-mono">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>

      <div className="flex">
        <div className="w-2/4">
          <Image
            src="/picture/shg_login_pic.jpg"
            width={500}
            height={600}
            layout="responsive"
          />
        </div>

        <div className="w-2/4 bg-gray-200 max-h-screen grid items-center">
          <form
            className=" w-1/2 3xl:w-5/12 grid justify-self-center bg-white p-10"
            onSubmit={(e) => onSubmit(e)}
          >
            <h1 className="mb-10 flex justify-center text-4xl">{h1Title}</h1>
            <label className="mb-3" id="username">
              Username:
            </label>
            <input
              className="outline-gray mb-5 pr-2 pl-2"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            {signText === "Sign up" ? (
              <>
                <label className="mb-3" id="username">
                  Email:
                </label>
                <input
                  className="outline-gray mb-5 pr-2 pl-2"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                />
              </>
            ) : (
              <></>
            )}
            <label className="mb-3" htmlFor="password">
              Password:
            </label>
            <input
              className="outline-gray mb-5 pr-2 pl-2"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label className="mb-3" htmlFor="password">
              Confirm password:
            </label>
            <input
              className="outline-gray mb-5 pr-2 pl-2"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            {passwordWarning}
            <button className="bg-green-400 mb-5 pt-2 pb-2">{signText}</button>
            {error ? <p className="text-red-600 mb-5">{error}</p> : null}
            <div>
              {haveAccount} <Link href={`${linkHref}`}>{linkText}</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
