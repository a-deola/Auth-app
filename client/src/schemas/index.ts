import { object, string, boolean, ref, ObjectSchema } from "yup";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree?: boolean;
};

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,.])[A-Za-z\d@$!%*?&,.]{6,}$/;

export const signupSchema: ObjectSchema<FormValues> = object().shape({
  username: string()
    .min(3, "Username should be at least 3 letters")
    .required("Username is required"),
  email: string().email().required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      passwordValidation,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  agree: boolean().oneOf([true], "You must agree to the terms"),
});
