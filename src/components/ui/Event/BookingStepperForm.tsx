import React, { useState } from "react";
import { Button, Grid, message, Steps, theme } from "antd";

const { useBreakpoint } = Grid;

interface IStep {
  title: string;
  content: JSX.Element;
  icon: JSX.Element;
}
interface IBookingStepperFormProps {
  steps: IStep[];
  current: number;
  prev: () => void;
}

const BookingStepperForm = ({
  steps,
  current,
  prev,
}: IBookingStepperFormProps) => {
  // const [current, setCurrent] = useState(0);

  const screen = useBreakpoint();

  // const next = () => {
  //   setCurrent(current + 1);
  // };

  // const prev = () => {
  //   setCurrent(current - 1);
  // };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));
  return (
    <div
      style={{
        width: screen.lg ? "80%" : "100%",
        margin: "auto",
        marginTop: 20,
        padding: 40,
        border: "1px solid #EDF4ED",
        borderRadius: 10,
        boxShadow: "5px 5px 40px 0px rgba(0,0,0,0.1)",
      }}
    >
      <Steps current={current} items={items} />
      <div
        style={{
          marginTop: 24,
        }}
      >
        {steps[current].content}
      </div>
      <div style={{ marginTop: 24 }}>
        {/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )} */}
        {/* {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )} */}
        {current > 0 && (
          <Button
            size="large"
            style={{ margin: "0 8px" }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingStepperForm;
