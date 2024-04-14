import { useState, MouseEvent } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import Layout from "../components/Layout";
import Input from "../components/Input";
import FormBtm from "../components/FormBtm";
import FormCon from "../components/FormCon";
import FormTop from "../components/FormTop";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import LgBtn from "../components/LgBtn";
import { signupSchema } from "../schemas";

function Signup() {
  const [isVisible, setIsVisible] = useState(false);

  interface FormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    agree?: boolean;
  }

  function handleSubmit(values: FormValues) {
    const url = "http://localhost:3000/api/user";
    const data = {
      username: values.username.toLocaleLowerCase(),
      email: values.email,
      password: values.password,
      confirm: values.confirmPassword,
      agree: values.agree,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function toggleVisibility(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsVisible(!isVisible);
  }
  return (
    <Layout>
      <FormCon>
        <FormTop text="Sign Up" />
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            agree: false,
          }}
          validationSchema={signupSchema}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <form autoComplete="off" className="flex flex-col gap-4">
              <Input
                onAdd={props.handleChange}
                type="text"
                name="username"
                placeholder="Username"
                value={props.values.username}
                onBlur={props.handleBlur}
              />
              <Input
                onAdd={props.handleChange}
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={props.values.email}
                onBlur={props.handleBlur}
              />
              <div className="relative">
                <input
                  onChange={props.handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:shadow-lg shadow-[#EAEAEA]"
                  name="password"
                  type={isVisible ? "text" : "password"}
                  placeholder="Password"
                  value={props.values.password}
                  onBlur={props.handleBlur}
                />
                {isVisible ? (
                  <button
                    onClick={(e) => toggleVisibility(e)}
                    className="absolute right-0 p-1 h-full focus:outline-none "
                  >
                    <EyeSlash fill="light" color="EAEAEA" size={25} />
                  </button>
                ) : (
                  <button
                    onClick={(e) => toggleVisibility(e)}
                    className="absolute right-0 p-1 h-full focus:outline-none "
                  >
                    <Eye fill="light" size={25} />
                  </button>
                )}
              </div>
              <input
                onChange={props.handleChange}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:shadow-lg shadow-[#EAEAEA]"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={props.values.confirmPassword}
                onBlur={props.handleBlur}
              />
              <label className="flex gap-5">
                <input
                  type="checkbox"
                  name="agree"
                  id=""
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  // value={props.values.agree}
                />
                <p>Agree to Our terms and Conditions</p>
              </label>
              <LgBtn btnName="Sign Up" onAdd={() => handleSubmit} />
              <FormBtm
                question="Already registered? "
                prompt="Login"
                route="/login"
              />
            </form>
          )}
        </Formik>
      </FormCon>
    </Layout>
  );
}

export default Signup;
