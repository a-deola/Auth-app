import FormBtm from "../components/FormBtm";
import FormCon from "../components/FormCon";
import FormTop from "../components/FormTop";
import Input from "../components/Input";
import Layout from "../components/Layout";
import LgBtn from "../components/LgBtn";

function Login() {
  return (
    <Layout>
      <FormCon>
        <FormTop text="Login" />
        <form className="flex flex-col gap-4">
          <Input type="email" name="email" placeholder="johndoe@email.com" />
          <Input type="password" name="password" placeholder="Password" />
          <a className="hover:underline" href="#">
            Forgot Password?
          </a>
          <LgBtn btnName="Login" />
          <FormBtm question="New user?" prompt=" Register" route="/signup" />
        </form>
      </FormCon>
    </Layout>
  );
}

export default Login;
