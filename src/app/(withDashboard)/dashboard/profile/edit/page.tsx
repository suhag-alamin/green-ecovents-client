"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UploadImage from "@/components/Forms/UploadImage";
import GEBreadCrumb from "@/components/ui/GEBreadCrumb";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IUser } from "@/interfaces/global";
import uploadImage from "@/utils/uploadImage";
import { Button, Flex, Grid, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const { useBreakpoint } = Grid;

const EditProfile = () => {
  const [profileData, setProfileData] = useState<IUser>();

  const screen = useBreakpoint();

  useEffect(() => {
    const getData = async () => {
      const res = (await (
        await axiosInstance.get("/user/profile")
      ).data) as IApiResponse;
      setProfileData(res.data);
    };
    getData();
  }, []);

  const url = "https://api.cloudinary.com/v1_1/dkw1ovah4/image/upload";

  const handleEditProfile = async (data: any) => {
    const formData = new FormData();

    formData.append("upload_preset", "green-ecovents");

    formData.append("file", data.profileImg);
    // formData.append("upload_preset", "green-ecovents");

    // upload image to cloudinary
    // const uploadImage = async () => {
    //   // setIsLoading(true);
    //   const pic = await axios.post(url, formData);
    //   console.log(pic?.data?.secure_url);
    //   // setIsLoading(false);
    // };
    // uploadImage();

    const image = await uploadImage(data?.profileImg);

    console.log(image);

    // const result = await (
    //   await axiosInstance.patch("/user/profile", formData)
    // ).data;
    // console.log(result);
  };

  const defaultValues = {
    firstName: profileData?.firstName,
    lastName: profileData?.lastName,
    email: profileData?.email,
    contactNo: profileData?.contactNo,
    profileImg: profileData?.profileImg,
  };

  if (!profileData) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div>
      <GEBreadCrumb
        items={[
          {
            label: "profile",
            link: "/dashboard/profile",
          },
        ]}
      />
      <div className="container">
        <Form submitHandler={handleEditProfile} defaultValues={defaultValues}>
          <Flex
            style={{
              width: screen.lg ? "50%" : "100%",
              margin: "auto",
              marginTop: 50,
              padding: 20,
              border: "1px solid #EDF4ED",
              borderRadius: 10,
              boxShadow: "5px 5px 40px 0px rgba(0,0,0,0.1)",
            }}
            vertical
            justify="center"
            // align="center"
            gap={6}
          >
            <UploadImage name="profileImg" />
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="email" name="email" label="Email" />
            <FormInput type="text" name="contactNo" label="Contact Number" />
            <Button size="large" type="primary" htmlType="submit">
              Update
            </Button>
          </Flex>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
