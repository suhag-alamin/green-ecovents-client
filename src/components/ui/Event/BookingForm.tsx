import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormRangePicker from "@/components/Forms/FormRangePicker";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IEvent, IUser, IUserInfo } from "@/interfaces/global";
import { bookEventSchema } from "@/schemas/events";
import { yupResolver } from "@hookform/resolvers/yup";
import type { CountdownProps } from "antd";
import { Button, Col, Grid, Row, Statistic, Typography, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

const { Countdown } = Statistic;

const { useBreakpoint } = Grid;

interface IBookingFormProps {
  event: IEvent;
  user: IUserInfo;
  id: string | string[] | undefined;
}

const BookingForm = ({ event, user, id }: IBookingFormProps) => {
  const screen = useBreakpoint();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(1);
  const [childrens, setChildrens] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(event?.price || 0);
  const [tax, setTax] = useState<number>(0);
  const [daysBooked, setDaysBooked] = useState<number>(1);
  const [userInfo, setUserInfo] = useState<IUser>();
  const [startDate, setStartDate] = useState<Dayjs>();
  const [endDate, setEndDate] = useState<Dayjs>();

  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const result = (await axiosInstance.get(`/user/${user.id}`))
        ?.data as IApiResponse;
      setUserInfo(result?.data);
    };
    loadUser();
  }, [user.id]);

  useEffect(() => {
    if (event) {
      const amount = adults * event?.price + (childrens * event?.price) / 2;

      const amountWithTax = (amount + amount * 0.1).toFixed(2);
      setTax(+amount * 0.1);

      const totalAmount = (+amountWithTax * daysBooked).toFixed(2);

      setTotalAmount(+totalAmount);
    }
  }, [adults, childrens, event, totalAmount, daysBooked]);

  const defaultValues = {
    startDate: startDate,
    endDate: endDate,
    email: userInfo?.email,
    contactNo: userInfo?.contactNo,
    totalAmount: totalAmount,
    adults: adults,
    childrens: childrens,
    daysBooked: daysBooked,
  };

  const onFinish: CountdownProps["onFinish"] = () => {
    message.info("Event has ended");
  };

  const handleAdults = (value: any) => {
    setAdults(value);
  };
  const handleChildren = (value: any) => {
    setChildrens(value);
  };

  const handleDateChange = (dates: any, dateStrings: any) => {
    if (dates) {
      const startDate = dates[0];
      const endDate = dates[1];

      setStartDate(startDate);
      setEndDate(endDate);

      const diff = endDate.diff(startDate, "days");
      setDaysBooked(diff);
    }
  };

  const handleBookEvent = async (data: any) => {
    if (user?.id && id) {
      setIsLoading(true);

      data.userId = user.id;
      data.eventId = id;

      const result = await axiosInstance.post("/bookings", data);

      const response = result?.data;
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
    <div className="">
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
        <div
          style={{
            margin: "20px 0",
          }}
        >
          <Row gutter={[16, 16]}></Row>
        </div>
        <Form
          submitHandler={handleBookEvent}
          resolver={yupResolver(bookEventSchema)}
          defaultValues={defaultValues}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={24}>
              <Countdown
                title="Event Ends In"
                value={event?.endDate}
                format="DD day HH hr"
                onFinish={onFinish}
              />
            </Col>
            <Col xs={24} md={24}>
              <Typography.Title
                style={{
                  fontSize: screen.lg ? 24 : 20,
                }}
                level={4}
              >
                Who is attending?
              </Typography.Title>
              <Row gutter={[10, 10]}>
                <Col xs={24} md={12}>
                  <Typography.Title
                    style={{
                      fontSize: screen.lg ? 20 : 18,
                    }}
                    level={5}
                  >
                    Adults (12+)
                  </Typography.Title>
                  <Typography.Paragraph
                    style={{
                      fontSize: screen.lg ? 16 : 14,
                    }}
                    strong
                    type="secondary"
                  >
                    ${event?.price} / person
                  </Typography.Paragraph>
                  <FormInput
                    type="number"
                    name="adults"
                    size="large"
                    min={1}
                    onChange={handleAdults}
                    styleProp={{
                      width: "100%",
                    }}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <Typography.Title
                    style={{
                      fontSize: screen.lg ? 20 : 18,
                    }}
                    level={5}
                  >
                    Children&apos;s (0-12)
                  </Typography.Title>
                  <Typography.Paragraph
                    style={{
                      fontSize: screen.lg ? 16 : 14,
                    }}
                    strong
                    type="secondary"
                  >
                    ${event?.price / 2} / kid
                  </Typography.Paragraph>
                  <FormInput
                    type="number"
                    name="childrens"
                    size="large"
                    min={0}
                    onChange={handleChildren}
                    styleProp={{
                      width: "100%",
                    }}
                  />
                </Col>
              </Row>
            </Col>

            <Col xs={24} md={12}>
              <FormInput
                type="email"
                name="email"
                size="large"
                placeholder="example@gmail.com"
                label="Email"
              />
            </Col>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="contactNo"
                size="large"
                placeholder="01784569875"
                label="Contact Number"
              />
            </Col>
            <Col xs={24} md={24}>
              <FormRangePicker
                name={["startDate", "endDate"]}
                label="Select Date Range"
                size="large"
                startDate={dayjs(event.startDate)}
                endDate={dayjs(event.endDate)}
                onChange={handleDateChange}
                isShowtime={true}
              />
            </Col>
          </Row>
          <div
            style={{
              margin: "20px 0",
            }}
          >
            <Typography.Paragraph
              style={{
                fontSize: screen.lg ? 16 : 14,
                marginBottom: 0,
              }}
              type="secondary"
            >
              Adults x {adults} = ${adults * event?.price}
            </Typography.Paragraph>
            <Typography.Paragraph
              style={{
                fontSize: screen.lg ? 16 : 14,
                marginBottom: 0,
              }}
              type="secondary"
            >
              Children x {childrens} = ${(childrens * event?.price) / 2}
            </Typography.Paragraph>

            <Typography.Paragraph
              style={{
                fontSize: screen.lg ? 16 : 14,
                marginBottom: 0,
              }}
              type="secondary"
            >
              Tax = ${tax}
            </Typography.Paragraph>

            <Typography.Title
              style={{
                fontSize: screen.lg ? 18 : 16,
              }}
              type="success"
              level={4}
            >
              Total = ${totalAmount}
            </Typography.Title>
          </div>
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
  );
};

export default BookingForm;
