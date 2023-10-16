"use client";

import { getErrorMessage } from "@/utils/schemaValidator";
import { Input, Typography } from "antd";
import { ReactElement, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

type IInput = {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  suffix?: ReactElement | ReactNode;
  prefix?: ReactElement | ReactNode;
  helperText?: string;
  styleProp?: any;
};

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  suffix,
  prefix,
  helperText,
  styleProp,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessage(errors, name);

  return (
    <>
      <Typography.Text
        style={{
          marginBottom: 5,
          display: "inline-block",
        }}
      >
        {label}
      </Typography.Text>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
              suffix={suffix}
              prefix={prefix}
              style={styleProp}
            />
          ) : (
            <Input
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
              suffix={suffix}
              prefix={prefix}
              style={styleProp}
            />
          )
        }
      />

      {errorMessage ? (
        <Typography.Text
          style={{
            fontSize: 12,
            lineHeight: "10px",
          }}
          type="danger"
        >
          {errorMessage}
        </Typography.Text>
      ) : (
        <Typography.Text
          style={{
            fontSize: 12,
            lineHeight: "10px",
          }}
          type="secondary"
        >
          {helperText}
        </Typography.Text>
      )}
    </>
  );
};

export default FormInput;
