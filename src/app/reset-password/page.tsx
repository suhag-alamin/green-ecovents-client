import ResetPassword from "@/components/ui/Authentication/ResetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password - GreenEcovents",
  description: "Reset Password GreenEcovents",
};
const ResetPasswordPage = () => {
  return (
    <>
      <ResetPassword />
    </>
  );
};

export default ResetPasswordPage;
