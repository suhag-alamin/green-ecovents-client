"use client";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IEvent, IReview } from "@/interfaces/global";
import { Avatar, Button, Card, Col, Flex, Grid, Rate, Row } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { useBreakpoint } = Grid;

const Reviews = () => {
  const screen = useBreakpoint();

  const [reviews, setReviews] = useState<IReview[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useMemo(() => {
    const loadReviews = async () => {
      setIsLoading(true);
      const res = (await axiosInstance.get("/reviews")).data as IApiResponse;
      setReviews(res.data);
      setIsLoading(false);
    };
    loadReviews();
  }, []);

  return (
    <div>
      <h3 className="section-title">Client Feedback</h3>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        modules={[Autoplay, Navigation]}
        navigation={true}
        slidesPerView={3}
      >
        {reviews?.length &&
          reviews.map((review) => (
            <SwiperSlide className="container" key={review?.id}>
              <Card
                hoverable
                style={{
                  height: "100%",
                }}
                loading={isLoading}
              >
                <div>
                  {review.user?.profileImg ? (
                    <Image
                      src={review.user.profileImg}
                      alt=""
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  ) : (
                    <Avatar size={64} icon={<UserOutlined />} />
                  )}
                </div>
                <Meta
                  style={{
                    margin: "20px 0",
                  }}
                  title={review.review}
                />
                <Rate defaultValue={review.rating} />
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
