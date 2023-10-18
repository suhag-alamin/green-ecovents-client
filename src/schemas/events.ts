import * as yup from "yup";

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
