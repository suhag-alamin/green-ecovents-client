import { Metadata } from "next";
import ForgetPassword from "@/components/ui/Authentication/ForgetPassword";

export const metadata: Metadata = {
  title: "Forget Password - GreenEcovents",
  description: "Forget Password GreenEcovents",
};

const ForgetPasswordPage = () => {
  return (
    <>
      <ForgetPassword />
    </>
  );
};

export default ForgetPasswordPage;