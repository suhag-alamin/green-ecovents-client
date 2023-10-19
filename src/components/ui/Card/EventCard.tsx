"use client";
import { EventStatus, IEvent } from "@/interfaces/global";
import { Button, Card, Flex, Grid, Typography } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const { useBreakpoint } = Grid;

interface EventCardProps {
  event: IEvent;
  loading?: boolean;
}

const EventCard = ({ event, loading }: EventCardProps) => {
  const screen = useBreakpoint();

  return (
    <Card
      hoverable
      style={{ height: "100%" }}
      cover={
        <Image
          src={event?.image || ""}
          alt={event?.title}
          width={400}
          height={300}
        />
      }
      loading={loading}
      actions={[
        <Link key="view" href={`/events/${event.id}`}>
          <Button type="primary">View Details</Button>
        </Link>,
        event.status === EventStatus.ongoing && (
          <Link key="book" href={`/events/booking/${event.id}`}>
            <Button type="primary">Book</Button>
          </Link>
        ),
        <Button key="book" type="primary">
          Reviews
        </Button>,
      ]}
    >
      <Typography.Title level={3} type="success">
        {event?.title}
      </Typography.Title>
      <Typography.Text type="secondary">
        {event?.description.slice(0, 50)}...
      </Typography.Text>

      <Typography.Title level={4} type="success">
        ${event?.price}
      </Typography.Title>
      <Flex gap={screen.lg ? 4 : 2} align="center" justify="start" wrap="wrap">
        <p
          style={{
            fontSize: screen.lg ? 20 : 16,
          }}
        >
          From {dayjs(event?.startDate).format("MMM D, hh:mm A")}{" "}
        </p>
        <p
          style={{
            fontSize: screen.lg ? 20 : 16,
          }}
        >
          To {dayjs(event?.endDate).format("MMM D, hh:mm A")} {"  "}
        </p>
        <p
          style={{
            fontSize: screen.lg ? 20 : 16,
          }}
        >
          On {event?.location}
        </p>
      </Flex>
    </Card>
  );
};

export default EventCard;
