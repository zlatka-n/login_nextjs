import { useForm } from "react-hook-form";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Login({
  title,
  description,
  signText,
  haveAccount,
  h1Title,
  linkHref,
  linkText,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => console.log(data);

  const enableButton = isDirty && isValid;

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
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="mb-10 flex justify-center text-4xl">{h1Title}</h1>
            <label className="mb-3" id="username">
              Username:
            </label>
            <input
              className="outline-gray mb-5 pr-2 pl-2"
              {...register("userName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.userName?.type === "required" && (
              <p className="text-red-500 pb-2">This field is required</p>
            )}
            {errors?.userName?.type === "maxLength" && (
              <p className="text-red-500 pb-2">
                username cannot exceed 20 characters
              </p>
            )}
            <label className="mb-3">Password:</label>
            <input
              className="outline-gray mb-5 pr-2 pl-2"
              {...register("password", {
                required: true,
              })}
            />
            {errors?.userName?.type === "required" && (
              <p className="text-red-500 pb-5">Password is required</p>
            )}
            <button
              className={`${
                enableButton
                  ? "bg-green-400 mb-5 pt-2 pb-2"
                  : "bg-green-100 mb-5 pt-2 pb-2"
              }`}
              disabled={!isDirty || !isValid}
            >
              {signText}
            </button>
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
