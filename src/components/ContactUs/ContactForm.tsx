import { Col, Row } from "antd";
import Message from "./Message";

const ContactForm = () => {
  return (
    <div className="container">
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Message />
        </Col>
        <Col xs={24} lg={12}></Col>
      </Row>
    </div>
  );
};

export default ContactForm;
