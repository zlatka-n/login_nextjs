import SignForm from "/components/SignForm";

export default function SignUp() {
  const h1Title = "Register";
  const signText = "Sign up";
  const haveAccount = <span>Already have an account?</span>;
  const linkHref = "/";
  const linkText = "Sign in";
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
