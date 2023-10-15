"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import styles from "@/styles/SignupSignin.module.css";
import { Button, Col, Row } from "antd";
import Link from "next/link";

const SignUp = () => {
  const handleSignUp = async (data: any) => {
    data.role = "USER";
    console.log(data);
  };
  return (
    <Row className={styles.signupBox}>
      <Col xs={24} md={10}>
        <div className={styles.signupLeftContainer}>
          <div>
            <h3>Welcome Back</h3>
            <p>To keep connected with us provide us with your information </p>
            <Link href="/signin">
              <Button
                style={{
                  marginTop: 20,
                }}
                type="default"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </Col>
      <Col xs={24} md={14}>
        <div className={styles.signupRightContainer}>
          <h3>Sign Up to GreenEcovents</h3>
          <Form submitHandler={handleSignUp}>
            <Row
              gutter={{
                xs: 6,
                md: 12,
              }}
            >
              <Col xs={24} md={12}>
                <FormInput
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="John"
                  size="large"
                />
              </Col>
              <Col xs={24} md={12}>
                <FormInput
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Doe"
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
              <Col xs={24} md={12}>
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  size="large"
                />
              </Col>
              <Col xs={24} md={12}>
                <FormInput
                  name="contactNo"
                  type="tell"
                  label="Contact Number"
                  placeholder="+88017855555"
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
              <Col xs={24} md={12}>
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="********"
                  size="large"
                  helperText="Password must be at least 8 characters and include uppercase, lowercase, numbers, and special characters."
                />
              </Col>
              <Col xs={24} md={12}>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="********"
                  size="large"
                  helperText="Re type password"
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
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignUp;
