"use client";
import { IEvent } from "@/interfaces/global";
import { Button, Col, Flex, Grid, Row } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const { useBreakpoint } = Grid;

interface SwiperSliderProps {
  events: IEvent[];
}

const SwiperSlider = ({ events }: SwiperSliderProps) => {
  const screen = useBreakpoint();
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      grabCursor={true}
      modules={[Autoplay, Navigation]}
      navigation={true}
      slidesPerView={1}
    >
      {events?.length &&
        events.map((event) => (
          <SwiperSlide className="container" key={event?.id}>
            <Row gutter={30} align="middle">
              <Col xs={24} md={8}>
                <Image
                  src={event?.image}
                  alt={event?.title}
                  width={300}
                  height={300}
                  style={{
                    border: "solid 5px #b9b6bf",
                    borderRadius: 9,
                  }}
                />
              </Col>
              <Col
                xs={24}
                md={16}
                style={{
                  textAlign: "left",
                }}
              >
                <h2
                  style={{
                    fontSize: screen.lg ? 48 : 36,
                  }}
                >
                  {event?.title}
                </h2>
                <Flex
                  gap={screen.lg ? 20 : 10}
                  align="center"
                  justify="start"
                  wrap="wrap"
                >
                  <h4
                    style={{
                      fontSize: screen.lg ? 34 : 26,
                      fontWeight: "500",
                    }}
                  >
                    From {dayjs(event?.startDate).format("MMM D, hh:mm A")}{" "}
                  </h4>
                  <h4
                    style={{
                      fontSize: screen.lg ? 34 : 26,
                      fontWeight: "500",
                    }}
                  >
                    To {dayjs(event?.endDate).format("MMM D, hh:mm A")} {"  "}
                  </h4>
                  <h4
                    style={{
                      fontSize: screen.lg ? 34 : 26,
                      fontWeight: "500",
                    }}
                  >
                    On {event?.location}
                  </h4>
                </Flex>
                <div
                  style={{
                    marginTop: 20,
                  }}
                >
                  <Link href={`/events/${event.id}`}>
                    <Button type="primary">View Details</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperSlider;
