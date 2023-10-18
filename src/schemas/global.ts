import * as yup from "yup";

export const addFaqSchema = yup.object().shape({
  question: yup.string().required("Question is required"),
  answer: yup.string().required("Answer is required"),
});

export const updateFaqSchema = yup.object().shape({
  question: yup.string().optional(),
  answer: yup.string().optional(),
});

export const addFeedback = yup.object().shape({
  feedback: yup.string().required("Feedback is required"),
});

export const addBlogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
});
