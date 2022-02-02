import React from "react";
import Head from "next/head";
import Image from "next/image";

const withSign = (WrappedComponent) => {
  const withSignHOC = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
    };

    // console.log(props);
    const form = (
      <div className="max-w-full max-h-screen md:overflow-hidden font-mono">
        <Head>
          <title></title>
          <meta name="description"></meta>
        </Head>
        <div className="grid md:flex">
          <div className="md:w-2/4">
            <Image
              src="/picture/shg_login_pic.jpg"
              width={500}
              height={600}
              layout="responsive"
              alt="login image"
              priority="true"
            />
          </div>

          <div className="order-first md:order-none md:w-2/4 md:bg-gray-200 h-4/6 md:h-screen md:max-h-screen md:grid md:items-center">
            <form
              onSubmit={(e) => onSubmit(e)}
              className="md:w-1/2 3xl:w-5/12 grid justify-self-center bg-slate-100 md:bg-white p-10"
            >
              <h1 className="mb-10 flex justify-center text-4xl">
                {props.title}
              </h1>
              <label className="mb-3" id="username">
                Username:
              </label>
              <input className="outline-gray mb-5 pr-2 pl-2" />
              <label className="mb-3" htmlFor="password">
                Password:
              </label>
              <input className="outline-gray mb-5 pr-2 pl-2" type="password" />
              <button className="bg-green-400 mb-5 pt-2 pb-2">
                {props.button}
              </button>
              <div>Do you have an account?</div>
            </form>
          </div>
        </div>{" "}
      </div>
    );

    return (
      <>
        <WrappedComponent form={form} {...props} />
      </>
    );
  };
  return withSignHOC;
};

export default withSign;
