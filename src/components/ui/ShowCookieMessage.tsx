"use client";
import { Button, Flex } from "antd";
import cookie from "@/assets/cookie.png";
import Image from "next/image";
import Link from "next/link";
import { CloseCircleOutlined } from "@ant-design/icons";
import { use, useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

const ShowCookieMessage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setToLocalStorage("cookie", "true");
    setShow(false);
  };

  useEffect(() => {
    const cookie = getFromLocalStorage("cookie");
    if (!cookie) {
      setShow(true);
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div>
      <Flex
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "10px 20px",
          background: "#3BA27A",
          color: "#EDF4ED",
        }}
        justify="center"
        align="center"
        gap={20}
      >
        <Image src={cookie} alt="" width={32} height={32} />
        <p style={{ marginRight: 10 }}>
          We use cookies to ensure you get the best experience on our website.
        </p>
        <Link href="/privacy-policy" style={{ color: "#EDF4ED" }}>
          Learn more
        </Link>
        <Button
          type="text"
          style={{
            color: "#EDF4ED",
          }}
          onClick={handleClose}
        >
          <CloseCircleOutlined />
        </Button>
      </Flex>
    </div>
  );
};

export default ShowCookieMessage;
