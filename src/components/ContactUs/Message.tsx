"use client";
import Form from "@/components/Forms/Form";
import FormInput from "../Forms/FormInput";
import { Button } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendMessageSchema } from "@/schemas/global";

const Message = () => {
  const handleMessageSend = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Form
        submitHandler={handleMessageSend}
        resolver={yupResolver(sendMessageSchema)}
      >
        <FormInput
          name="name"
          type="text"
          label="Your Name"
          placeholder="John Doe"
          size="large"
        />
        <FormInput
          name="email"
          type="email"
          label="Your Email"
          placeholder="example@gmail.com"
          size="large"
        />
        <FormInput
          name="phone"
          type="text"
          label="Your Phone"
          placeholder="+1 234 567 8901"
          size="large"
        />
        <FormInput
          name="source"
          type="text"
          label="Where did you hear about us?"
          placeholder="Google, Facebook, etc."
          size="large"
        />
        <FormInput
          name="message"
          type="text-area"
          label="Your Message"
          rows={4}
        />
        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form>
    </>
  );
};

export default Message;
