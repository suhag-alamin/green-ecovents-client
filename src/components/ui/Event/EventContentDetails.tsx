"use client";

import { IEvent } from "@/interfaces/global";
import { Flex, Grid, Rate, Typography } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const { useBreakpoint } = Grid;

interface EventDetailsProps {
  event: IEvent;
}

const EventContentDetails = ({ event }: EventDetailsProps) => {
  const screen = useBreakpoint();
  const [averageRating, setAverageRating] = useState<number>(1);

  useEffect(() => {
    if (event.reviews.length > 0) {
      const totalRating = event.reviews.reduce((acc, review) => {
        return acc + review.rating;
      }, 0);
      setAverageRating(totalRating / event.reviews.length);
    }
  }, [event]);

  return (
    <div
      style={{
        margin: "20px 0",
      }}
    >
      <Typography.Title
        style={{
          fontSize: screen.lg ? 28 : 22,
          fontWeight: "700",
        }}
        level={2}
        type="success"
      >
        {event?.title}
      </Typography.Title>
      <Typography.Title
        style={{
          fontSize: screen.lg ? 24 : 20,
          fontWeight: "700",
        }}
        level={4}
      >
        ${event?.price}
      </Typography.Title>
      <Typography.Paragraph type="secondary">
        {event?.description}
      </Typography.Paragraph>
      <Flex gap={screen.lg ? 10 : 6} align="center" justify="start" wrap="wrap">
        <Typography.Title
          level={4}
          style={{
            fontSize: screen.lg ? 20 : 18,
            fontWeight: "400",
          }}
        >
          From {dayjs(event?.startDate).format("MMM D YYYY, hh:mm A")}{" "}
        </Typography.Title>
        <Typography.Title
          level={4}
          style={{
            fontSize: screen.lg ? 20 : 18,
            fontWeight: "400",
          }}
        >
          To {dayjs(event?.endDate).format("MMM D YYYY, hh:mm A")} {"  "}
        </Typography.Title>
        <Typography.Title
          level={4}
          style={{
            fontSize: screen.lg ? 20 : 18,
            fontWeight: "400",
          }}
        >
          On {event?.location}
        </Typography.Title>
      </Flex>
      <Rate disabled value={averageRating} allowHalf />
    </div>
  );
};

export default EventContentDetails;
