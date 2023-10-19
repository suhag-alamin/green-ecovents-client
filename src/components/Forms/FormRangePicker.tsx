import { DatePicker, DatePickerProps, Typography } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { Dayjs } from "dayjs";
import moment from "moment";
import { Controller, useFormContext } from "react-hook-form";

const { RangePicker } = DatePicker;

type GERangePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string[];
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
  startDate?: any;
  endDate?: any;
};

const FormRangePicker = ({
  name,
  label,
  onChange,
  startDate,
  endDate,
  size = "large",
}: GERangePikerProps) => {
  const { control, setValue } = useFormContext();

  const currentDate = moment();
  const minusStart = moment(startDate).diff(currentDate, "days");
  const minusEnd = moment(endDate).diff(currentDate, "days");

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
            disabledDate={(current) => {
              if (!startDate && !endDate) {
                return false;
              }
              return (
                moment().add(-minusStart, "days") >= current ||
                moment().add(minusEnd, "days") <= current
              );
            }}
          />
        )}
      />
    </div>
  );
};

export default FormRangePicker;
