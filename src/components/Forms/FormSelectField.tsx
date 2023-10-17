"use client";
import { getErrorMessage } from "@/utils/schemaValidator";
import { Select, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface SelectOptions {
  label: string;
  value: string;
}

interface SelectFieldProps {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  placeholder?: string;
  options: SelectOptions[];
  defaultValue?: SelectOptions;
  helperText?: string;
}

const FormSelectField = ({
  name,
  size,
  value,
  label,
  options,
  defaultValue,
  placeholder,
  helperText,
}: SelectFieldProps) => {
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
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            style={{
              width: "100%",
            }}
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            placeholder={placeholder}
          />
        )}
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

export default FormSelectField;
