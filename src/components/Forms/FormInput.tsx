"use client";

import { Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { ReactElement, ReactNode, useEffect } from "react";

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
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Typography.Text>{label}</Typography.Text>
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
            />
          )
        }
      />
    </>
  );
};

export default FormInput;
