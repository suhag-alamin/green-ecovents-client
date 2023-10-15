"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import styles from "@/styles/SignupSignin.module.css";
import { Button, Col, Row } from "antd";
import Link from "next/link";

const SignIn = () => {
  const handleSignUp = async (data: any) => {
    data.role = "USER";
    console.log(data);
  };
  return (
    <Row className={styles.signinBox}>
      <Col xs={24} md={12}>
        <div className={styles.signinLeftContainer}>
          <h3>Sign Up to GreenEcovents</h3>
          <Form submitHandler={handleSignUp}>
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
