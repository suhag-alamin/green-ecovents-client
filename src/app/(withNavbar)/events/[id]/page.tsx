import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { EventStatus, IEvent } from "@/interfaces/global";
import { Button, Col, Row, Spin } from "antd";
import Image from "next/image";
import EventContentDetails from "@/components/ui/Event/EventContentDetails";
import Link from "next/link";

const EventDetails = async ({ params }: { params: { id: string } }) => {
  const result = (await axiosInstance.get(`/events/${params.id}`))
    ?.data as IApiResponse;
  const event: IEvent = result?.data;

  if (!event) {
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
    <div className="container">
      <Row gutter={20}>
        <Col xs={24} md={10}>
          <Image
            alt={event?.title}
            src={event?.image}
            width={600}
            height={400}
            style={{
              maxWidth: "100%",
              border: "2px solid #b9b6bf",
              borderRadius: 10,
            }}
          />
        </Col>
        <Col xs={24} md={14}>
          <EventContentDetails event={event} />
          {event.status === EventStatus.ongoing && (
            <Link key={event.id} href={`/events/booking/${event.id}`}>
              <Button type="primary">Book Now</Button>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default EventDetails;
