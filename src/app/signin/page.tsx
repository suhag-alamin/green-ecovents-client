"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { signInSchema } from "@/schemas/auth";
import { storeUserInfo } from "@/services/auth.service";
import styles from "@/styles/SignupSignin.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSignIn: SubmitHandler<FormValues> = async (data: any) => {
    setIsLoading(true);

    const result = await axiosInstance.post("/auth/login", data);

    // if (result?.statusCode === 200 && result?.data?.accessToken) {
    //   storeUserInfo(result?.data?.accessToken);
    //   message.success(result.message);
    //   setIsLoading(false);
    //   router.push("/dashboard/profile");
    // } else {
    //   message.error("Something went wrong, try again");
    //   setIsLoading(false);
    // }
    const response = result?.data;
    if (response?.statusCode === 200 && response?.data?.accessToken) {
      storeUserInfo(response?.data?.accessToken);
      message.success(response.message);
      setIsLoading(false);
      router.push("/dashboard/profile");
    }
    // @ts-ignore
    else if (!result?.success) {
      setIsLoading(false);
      // @ts-ignore
      message.error(result?.message || "Something went wrong try again later");
    }
  };
  return (
    <Row className={styles.signinBox}>
      <Col xs={24} md={12}>
        <div className={styles.signinLeftContainer}>
          <h3>Sign In to GreenEcovents</h3>
          <Form
            submitHandler={handleSignIn}
            resolver={yupResolver(signInSchema)}
          >
            <Row
              style={{
                margin: "10px 0",
              }}
              gutter={{
                xs: 6,
                md: 12,
              }}
            >
              <Col xs={24}>
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  size="large"
                />
              </Col>
            </Row>
            <Row
              style={{
                margin: "10px 0",
              }}
              gutter={{
                xs: 6,
                md: 12,
              }}
            >
              <Col xs={24}>
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="********"
                  size="large"
                />
              </Col>
            </Row>
            <div
              style={{
                width: "60%",
                margin: "auto",
                marginTop: 20,
              }}
            >
              <Button
                style={{
                  width: "100%",
                }}
                size="large"
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Sign In
              </Button>
            </div>
          </Form>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div className={styles.signinRightContainer}>
          <div>
            <h3>Hello Friend!</h3>
            <p>To keep connected with us provide us with your information </p>
            <Link href="/signup">
              <Button
                style={{
                  marginTop: 20,
                }}
                type="default"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SignIn;
