import { DatePicker, DatePickerProps, Typography } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

const { RangePicker } = DatePicker;

type GERangePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string[];
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

const FormRangePicker = ({
  name,
  label,
  onChange,
  size = "large",
}: GERangePikerProps) => {
  const { control, setValue } = useFormContext();

  // const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
  //   onChange ? onChange(date, dateString) : null;
  //   setValue(name, date);
  // };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    // @ts-ignore
    setValue(name[0], value[0]);
    // @ts-ignore
    setValue(name[1], value[1]);
  };

  return (
    <div>
      <Typography.Text
        style={{
          marginBottom: 5,
          display: "inline-block",
        }}
      >
        {label}
      </Typography.Text>
      <br />
      <Controller
        name={name[0]}
        control={control}
        render={({ field }) => (
          <RangePicker
            showTime
            size={size}
            onOk={onOk}
            style={{ width: "100%" }}
          />
        )}
      />
    </div>
  );
};

export default FormRangePicker;
