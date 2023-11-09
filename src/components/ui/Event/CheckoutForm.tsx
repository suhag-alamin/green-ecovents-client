import axiosInstance from "@/helpers/axios/axiosInstance";
import { IBooking } from "@/interfaces/global";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  IbanElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button, Typography, message } from "antd";
import { useState } from "react";

interface ICheckoutFormProps {
  bookingInfo: IBooking | undefined;
  clientSecret: string;
}

const CheckoutForm = ({ bookingInfo, clientSecret }: ICheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState("");

  if (!bookingInfo) {
    return null;
  }

  const { totalAmount, email } = bookingInfo;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setProcessing(true);

    if (elements == null) {
      console.log("elements is null");
      setProcessing(false);
      return;
    }

    if (!stripe || !elements) {
      console.log("stripe or elements is null");
      setProcessing(false);
      return;
    }

    const result = await stripe.confirmPayment({
      elements,

      confirmParams: {
        return_url: `${window?.location?.origin}/events/booking/confirm`,
        payment_method_data: {
          billing_details: {
            email,
          },
        },
      },
    });

    if (result.error) {
      setProcessing(false);
      console.log(result.error.message);
      message.error(result.error.message || "Something went wrong");
    } else {
      // const result = await axiosInstance.post("/bookings", bookingInfo);
      // const response = result?.data;
      // if (response?.statusCode === 200) {
      //   message.success(response.message);
      //   setProcessing(false);
      //   // router.push("/dashboard/user/bookings");
      // }
      // // @ts-ignore
      // else if (!result?.success) {
      //   setProcessing(false);
      //   message.error(
      //     // @ts-ignore
      //     result?.message || "Something went wrong try again later"
      //   );
      // }

      setProcessing(false);
      message.success("Payment successful");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      <Button
        style={{
          marginTop: 16,
          width: "100%",
        }}
        loading={processing}
        type="primary"
        htmlType="submit"
        disabled={!stripe || !elements}
        size="large"
      >
        Pay & Book Now (${totalAmount})
      </Button>
      {errorMessage && (
        <Typography.Paragraph
          style={{
            fontSize: 14,
          }}
          type="danger"
        >
          {errorMessage}
        </Typography.Paragraph>
      )}
    </form>
  );
};

export default CheckoutForm;
