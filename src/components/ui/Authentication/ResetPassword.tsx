"use client";
import { useSearchParams } from "next/navigation";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { resetPasswordSchema } from "@/schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, Typography, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { baseApi } from "@/config/api";

interface FormValues {
  email: string;
}

const ResetPassword = () => {
  const params = useSearchParams();
  const token = params.get("token");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleResetPass: SubmitHandler<FormValues> = async (data: any) => {
    setIsLoading(true);
    data.token = token;
    data.newPassword = data.password;
    delete data.password;
    delete data.confirmPassword;

    console.log(data);

    const result = await axios.post(`${baseApi}/auth/reset-password`, data);

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
              Reset Password
            </Typography.Title>
            <Form
              submitHandler={handleResetPass}
              resolver={yupResolver(resetPasswordSchema)}
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
                    name="password"
                    label="New Password"
                    type="password"
                    placeholder="********"
                  />
                </Col>
                <Col xs={24}>
                  <FormInput
                    name="confirmPassword"
                    label="New Password"
                    type="password"
                    placeholder="********"
                  />
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
                      Reset Password
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

export default ResetPassword;
