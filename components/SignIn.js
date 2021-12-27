import SignForm from "./SignForm";

export default function SignIn() {
  const h1Title = "Sign in";
  const signText = "Sign in";
  const haveAccount = <span>Don&apos;t have an account?</span>;
  const linkHref = "/register";
  const linkText = "Sign up";
  return (
    <div>
      <SignForm
        signText={signText}
        haveAccount={haveAccount}
        h1Title={h1Title}
        linkHref={linkHref}
        linkText={linkText}
      ></SignForm>
    </div>
  );
}
