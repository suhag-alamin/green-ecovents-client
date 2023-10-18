import * as yup from "yup";

enum status {
  pending = "pending",
  confirmed = "confirmed",
  canceled = "canceled",
}

export const addCategorySchema = yup.object().shape({
  name: yup.string().required("Category name is required"),
});

export const addEventSchema = yup.object().shape({
  title: yup.string().required("Event title is required"),
  description: yup.string().required("Description is required"),
  startDate: yup.date().required("Start date is required"),
  endDate: yup.date().required("End Date is required"),
  location: yup.string().required("Location is required"),
  price: yup.string().required("Price is required"),

  categoryId: yup.string().required("Event Category is required"),
});
export const updateEventSchema = yup.object().shape({
  title: yup.string().optional(),
  description: yup.string().optional(),
  startDate: yup.date().optional(),
  endDate: yup.date().optional(),
  location: yup.string().optional(),
  price: yup.string().optional(),
  categoryId: yup.string().optional(),
});

export const updateBookingStatusSchema = yup.object().shape({
  status: yup
    .string()
    .oneOf(Object.values(status), "Select valid status")
    .required("Status is required"),
});
export const addFaqSchema = yup.object().shape({
  question: yup.string().required("Question is required"),
  answer: yup.string().required("Answer is required"),
});
export const updateFaqSchema = yup.object().shape({
  question: yup.string().optional(),
  answer: yup.string().optional(),
});
