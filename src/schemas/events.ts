import * as yup from "yup";

export const addCategorySchema = yup.object().shape({
  name: yup.string().required("Category name is required"),
});
