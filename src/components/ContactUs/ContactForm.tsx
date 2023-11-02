import { Col, Row } from "antd";
import Message from "./Message";
import Map from "./Map";

const ContactForm = () => {
  return (
    <div className="container">
      <Row gutter={[20, 20]}>
        <Col xs={24} lg={12}>
          <Message />
        </Col>
        <Col xs={24} lg={12}>
          <Map />
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
