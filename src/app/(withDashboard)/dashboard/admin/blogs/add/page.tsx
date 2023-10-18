"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UploadImage from "@/components/Forms/UploadImage";
import ActionBar from "@/components/ui/ActionBar";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IUserInfo } from "@/interfaces/global";
import { addBlogSchema } from "@/schemas/global";
import { getUserInfo } from "@/services/auth.service";
import uploadImage from "@/utils/uploadImage";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState("");

  const user = getUserInfo() as IUserInfo;

  const router = useRouter();

  const handleAddBlog = async (data: any) => {
    if (user?.id) {
      setIsLoading(true);
      const image = await uploadImage(data?.image);

      data.userId = user.id;
      data.image = image;
      data.content = value;

      const result = await axiosInstance.post("/blogs", data);

      const response = result.data;
      if (response?.statusCode === 200) {
        message.success(response.message);
        setIsLoading(false);
        router.push("/dashboard/admin/blogs");
      }
      // @ts-ignore
      else if (!result?.success) {
        setIsLoading(false);
        message.error(
          // @ts-ignore
          result?.message || "Something went wrong try again later"
        );
      }
    } else {
      message.error("You have to login to create event");
    }
  };

  return (
    <div>
      <ActionBar title="Add Blog" />
      <div className="container">
        <div
          style={{
            margin: "auto",
            marginTop: 20,
            padding: 20,
            border: "1px solid #EDF4ED",
            borderRadius: 10,
            boxShadow: "5px 5px 40px 0px rgba(0,0,0,0.1)",
          }}
        >
          <Form
            submitHandler={handleAddBlog}
            resolver={yupResolver(addBlogSchema)}
          >
            <Row
              gutter={{
                xs: 6,
                md: 16,
              }}
            >
              <Col xs={24} md={24}>
                <UploadImage name="image" />
              </Col>
              <Col xs={24} md={24}>
                <FormInput
                  name="title"
                  type="text"
                  label="Blog title"
                  size="large"
                />
              </Col>
              <Col xs={24} md={24}>
                <ReactQuill
                  style={{
                    margin: "20px 0",
                  }}
                  theme="snow"
                  value={value}
                  onChange={setValue}
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
                Add Block
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
