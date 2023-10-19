"use client";
import Form from "@/components/Forms/Form";
import FormRangePicker from "@/components/Forms/FormRangePicker";
import ActionBar from "@/components/ui/ActionBar";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IEvent, IUserInfo } from "@/interfaces/global";
import { bookEventSchema } from "@/schemas/events";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Grid, Row, message } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { useBreakpoint } = Grid;

const EventBooking = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [event, setEvent] = useState<IEvent>();

  const screen = useBreakpoint();
  const router = useRouter();

  const user = getUserInfo() as IUserInfo;

  useEffect(() => {
    const loadEvent = async () => {
      const result = (await axiosInstance.get(`/events/${id}`))
        .data as IApiResponse;
      setEvent(result.data);
    };
    loadEvent();
  }, [id]);

  const defaultValues = {
    startDate: event?.startDate,
    endDate: event?.endDate,
  };

  const handleBookEvent = async (data: any) => {
    if (user?.id && id) {
      setIsLoading(true);

      data.userId = user.id;
      data.eventId = id;

      console.log(data);

      const result = await axiosInstance.post("/bookings", data);

      const response = result.data;
      if (response?.statusCode === 200) {
        message.success(response.message);
        setIsLoading(false);
        router.push("/dashboard/user/bookings");
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
      message.error("You have to login for booking.");
    }
  };

  return (
    <div className="container">
      <ActionBar title="Book Event" />
      <div className="container">
        <div
          style={{
            width: screen.lg ? "60%" : "100%",
            margin: "auto",
            marginTop: 20,
            padding: 20,
            border: "1px solid #EDF4ED",
            borderRadius: 10,
            boxShadow: "5px 5px 40px 0px rgba(0,0,0,0.1)",
          }}
        >
          <Form
            submitHandler={handleBookEvent}
            resolver={yupResolver(bookEventSchema)}
            defaultValues={defaultValues}
          >
            <Row
              gutter={{
                xs: 6,
                md: 16,
              }}
            >
              <Col xs={24} md={24}>
                <FormRangePicker
                  name={["startDate", "endDate"]}
                  label="Select Date Range"
                  size="large"
                  startDate={defaultValues.startDate}
                  endDate={defaultValues.endDate}
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
                Confirm Booking
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EventBooking;
