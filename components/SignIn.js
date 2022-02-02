import SignForm from "./SignForm";
import withSign from "./SignHOC";

function SignIn({ form }) {
  return <div>{form}</div>;
}

export default withSign(SignIn);
