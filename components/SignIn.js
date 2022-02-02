import withSign from "./SignHOC";

///squash 1
function SignIn({ form }) {
  return <div>{form}</div>;
}

export default withSign(SignIn);
