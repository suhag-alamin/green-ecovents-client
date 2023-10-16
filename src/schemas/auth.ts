import * as yup from "yup";

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email Address is required"),
  contactNo: yup
    .string()
    .min(11, "Contact number is too short")
    .max(15, "Contact number is too long")
    .required("Contact Number is required"),
  password: yup
    .string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(16, "Password is too long - should be 16 chars maximum.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
      "Password must include at least one number and one special character."
    )
    .required("Password is required"),

  confirmPassword: yup
    .string()
    // @ts-ignore
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});
export const signInSchema = yup.object().shape({
  email: yup.string().email().required("Email Address is required"),
  password: yup.string().required("Password is required"),
});

export const updateProfileSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email(),
  contactNo: yup
    .string()
    .min(11, "Contact number is too short")
    .max(15, "Contact number is too long"),
});

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required("Current Password is required"),

  newPassword: yup
    .string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(16, "Password is too long - should be 16 chars maximum.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
      "Password must include at least one number and one special character."
    )
    .required("New Password is required"),
});
