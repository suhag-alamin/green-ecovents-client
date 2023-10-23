"use client";
/* 


Feature: User-Friendly Booking

Icon: CalendarOutlined
Description: Easily book your desired services with our intuitive booking system. Choose dates, times, and options effortlessly.
Feature: Eco-Friendly Events

Icon: EnvironmentOutlined
Description: Discover and book eco-conscious events and services that prioritize sustainability and environmental responsibility.
Feature: User Ratings and Reviews

Icon: StarOutlined
Description: Leave ratings and reviews for services you've booked and read feedback from other users to make informed decisions.
Feature: Personalized Recommendations

Icon: GiftOutlined
Description: Receive personalized service recommendations based on your preferences and past bookings, ensuring a tailored experience.
*/

import {
  CalendarOutlined,
  EnvironmentOutlined,
  StarOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { Col, Grid, Row, Typography } from "antd";
import styles from "@/styles/Home.module.css";

const { useBreakpoint } = Grid;

const Features = () => {
  const screen = useBreakpoint();
  return (
    <div className="container">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={12} md={6}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <CalendarOutlined />
            </div>
            <Typography.Title level={4} type="success">
              User-Friendly Booking
            </Typography.Title>
            <Typography.Text type="secondary">
              Easily book your desired services with our intuitive booking
              system. Choose dates, times, and options effortlessly.
            </Typography.Text>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <EnvironmentOutlined />
            </div>
            <Typography.Title level={4} type="success">
              Eco-Friendly Events
            </Typography.Title>
            <Typography.Text type="secondary">
              Discover and book eco-conscious events and services that
              prioritize sustainability and environmental responsibility.
            </Typography.Text>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <StarOutlined />
            </div>
            <Typography.Title level={4} type="success">
              User Ratings and Reviews
            </Typography.Title>
            <Typography.Text type="secondary">
              Leave ratings and reviews for services you&apos;ve booked and read
              feedback from other users to make informed decisions.
            </Typography.Text>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <GiftOutlined />
            </div>
            <Typography.Title level={4} type="success">
              Personalized Recommendations
            </Typography.Title>
            <Typography.Text type="secondary">
              Receive personalized service recommendations based on your
              preferences and past bookings, ensuring a tailored experience.
            </Typography.Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
