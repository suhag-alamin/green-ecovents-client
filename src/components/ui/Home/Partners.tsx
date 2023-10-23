import google from "@/assets/google.svg";
import grab from "@/assets/grab.svg";
import medium from "@/assets/medium.svg";
import microsoft from "@/assets/microsoft.svg";
import spotify from "@/assets/spotify.svg";
import stripe from "@/assets/stripe.svg";
import uber from "@/assets/uber.svg";
import youtube from "@/assets/youtube.svg";
import zoom from "@/assets/zoom.svg";
import { Col, Row } from "antd";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="container">
      <h3 className="section-title">Join these brands</h3>
      <p
        style={{
          textAlign: "center",
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        We&apos;ve had the pleasure of working with industry-defining brands.
        These are just some of them.
      </p>
      <Row gutter={[10, 10]} justify="center">
        <Col xs={12} sm={12} md={4}>
          <Image
            width={150}
            height={50}
            src={google}
            alt="google"
            draggable={false}
          />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Image
            width={150}
            height={50}
            src={microsoft}
            alt="microsoft"
            draggable={false}
          />
        </Col>

        <Col xs={12} sm={12} md={4}>
          <Image
            width={150}
            height={50}
            src={grab}
            alt="grab"
            draggable={false}
          />
        </Col>

        <Col xs={12} sm={12} md={4}>
          <Image
            width={150}
            height={50}
            src={medium}
            alt="medium"
            draggable={false}
          />
        </Col>

        <Col xs={12} sm={12} md={4}>
          <Image
            width={150}
            height={50}
            src={uber}
            alt="uber"
            draggable={false}
          />
        </Col>

        <Col xs={12} sm={12} md={4}>
          <Image
            width={150}
            height={50}
            src={stripe}
            alt="stripe"
            draggable={false}
          />
        </Col>

        <Col xs={12} sm={12} md={4}>
          <Image
            width={150}
            height={50}
            src={youtube}
            alt="youtube"
            draggable={false}
          />
        </Col>

        <Col xs={12} sm={12} md={4}>
          <Image
            width={150}
            height={50}
            src={spotify}
            alt="spotify"
            draggable={false}
          />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Image
            width={150}
            height={50}
            src={zoom}
            alt="zoom"
            draggable={false}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Partners;
