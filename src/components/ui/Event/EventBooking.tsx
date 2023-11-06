"use client";
import GEBreadCrumb from "@/components/ui/GEBreadCrumb";
import { userRole } from "@/constants/role";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IEvent, IUserInfo } from "@/interfaces/global";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { Grid, Spin, Statistic, message } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
const { Countdown } = Statistic;

const { useBreakpoint } = Grid;

const EventBooking = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [event, setEvent] = useState<IEvent>();

  const screen = useBreakpoint();
  const router = useRouter();

  const userLoggedIn = isLoggedIn();
  const user = getUserInfo() as IUserInfo;

  useEffect(() => {
    if (user.role !== userRole.USER) {
      message.error("You have to login as user for booking.");
      router.push("/signin");
    }
  }, [user, router]);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/signin");
    }
  }, [router, userLoggedIn]);

  useEffect(() => {
    const loadEvent = async () => {
      setIsLoading(true);
      const result = (await axiosInstance.get(`/events/${id}`))
        ?.data as IApiResponse;
      setEvent(result?.data);
      setIsLoading(false);
    };
    loadEvent();
  }, [id]);

  if (isLoading || !event) {
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
        title="Book Event"
        items={[
          {
            label: "Events",
            link: "/events",
          },
          {
            label: `Book - ${event?.title}` || "Book Event",
          },
        ]}
      />
      <div className="container">
        <BookingForm event={event} user={user} id={id} />
      </div>
    </div>
  );
};

export default EventBooking;
