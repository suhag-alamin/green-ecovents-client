"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { forgetPasswordSchema } from "@/schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, Typography, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
}
const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleForgetPass: SubmitHandler<FormValues> = async (data: any) => {
    setIsLoading(true);

    const result = await axiosInstance.post("/auth/forget-password", data);

    const response = result?.data;
    if (response?.statusCode === 200) {
      message.success(response.message);
      setIsLoading(false);
    }
    // @ts-ignore
    else if (!result?.success) {
      setIsLoading(false);
      // @ts-ignore
      message.error(result?.message || "Something went wrong try again later");
    }
  };

  return (
    <div className="container">
      <Row
        justify="center"
        align="middle"
        style={{
          height: "80vh",
        }}
      >
        <Col xs={24} md={12}>
          <div>
            <Typography.Title
              level={3}
              style={{
                textAlign: "center",
              }}
            >
              Forget Password?{" "}
            </Typography.Title>
            <Form
              submitHandler={handleForgetPass}
              resolver={yupResolver(forgetPasswordSchema)}
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

                <Col xs={24}>
                  <Link href="/signin">
                    <Typography.Link>Remember it? Sign In</Typography.Link>
                  </Link>
                </Col>
                <Col
                  style={{
                    marginTop: 20,
                  }}
                  xs={24}
                  md={24}
                >
                  <div>
                    <Button
                      style={{
                        width: "100%",
                      }}
                      size="large"
                      type="primary"
                      htmlType="submit"
                      loading={isLoading}
                    >
                      Send Email
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPassword;
