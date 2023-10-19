"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { CalendarOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Typography } from "antd";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (data: any) => {
    if (data?.query) {
      router.push(`/result/events?query=${data?.query}`);
    }
  };
  return (
    <div
      style={{
        background: "#43934A",
        color: "#fff",
        padding: 20,
      }}
    >
      <div className="container">
        <Form submitHandler={handleSearch}>
          <Row justify="center" align="middle">
            <Col xs={6}>
              <Flex gap={16} align="center">
                <CalendarOutlined
                  style={{
                    fontSize: 64,
                    // color: "#43934A",
                  }}
                />
                <div>
                  <Typography.Title
                    style={{
                      color: "#EDF4ED",
                    }}
                    level={4}
                  >
                    WHAT YOU WANT
                  </Typography.Title>
                  <Typography.Text
                    style={{
                      color: "#EDF4ED",
                    }}
                  >
                    Find the Best Event for You
                  </Typography.Text>
                </div>
              </Flex>
            </Col>
            <Col xs={18}>
              <FormInput
                styleProp={{
                  background: "#EDF4ED",
                }}
                name="query"
                type="search"
                size="large"
                placeholder="Eco friendly wedding"
                suffix={
                  <Button
                    icon={<SearchOutlined />}
                    type="primary"
                    htmlType="submit"
                  >
                    Find Event
                  </Button>
                }
              />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default SearchBar;
