import { DatePicker, DatePickerProps, Typography } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

type GEDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
}: GEDatePikerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };

  return (
    <div>
      <Typography.Paragraph
        style={{
          marginBottom: 5,
          display: "inline-block",
        }}
      >
        {label}
      </Typography.Paragraph>
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            showTime
            defaultValue={dayjs(field.value) || Date.now()}
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
