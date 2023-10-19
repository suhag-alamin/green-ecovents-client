"use client";

import { getErrorMessage } from "@/utils/schemaValidator";
import { Input, Rate, Typography } from "antd";
import { ReactElement, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;

  value?: string | string[] | undefined;

  label?: string;

  helperText?: string;
  styleProp?: any;
  disable?: boolean;
}

const Rating = ({
  name,

  value,

  label,

  helperText,
  styleProp,
  disable,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessage(errors, name);

  return (
    <div
      style={{
        margin: "10px 0",
      }}
    >
      <Typography.Text
        style={{
          marginBottom: 5,
          display: "block",
        }}
      >
        {label}
      </Typography.Text>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Rate
            {...field}
            value={value ? value : field.value}
            style={styleProp}
            disabled={disable}
            allowHalf={true}
            allowClear={true}
          />
        )}
      />

      {errorMessage ? (
        <Typography.Text
          style={{
            fontSize: 12,
            lineHeight: "10px",
            display: "block",
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
            display: "block",
          }}
          type="secondary"
        >
          {helperText}
        </Typography.Text>
      )}
    </div>
  );
};

export default Rating;
