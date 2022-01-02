import { Field } from "formik";
import React from "react";
import "./Input.Style.scss";
import Select from "react-select";

interface StringInputProps {
  name: string;
  placeholder: string;
  dir: string;
}

export const StringInput = (props: StringInputProps) => {
  return (
    <div className={"String_Input"}>
      <Field
        type="text"
        dir={props.dir}
        placeholder={props.placeholder}
        id={props.name}
        name={props.name}
      />
    </div>
  );
};


const ChoiceYearInput = (props: { name: string }) => {
  const years = [];
  for (let year = 1340; year < 1400; year++) {
    years.push({ value: `${ year }`, label: `${ year }`});
  }
  console.log(years);
  return (
    <div className={"choice_input input_time_year"}>
      <Select name={props.name} options={years} placeholder="سال" />
    </div>
  );
};

const ChoiceMonthInput = (props: { name: string }) => {
  const months = [
    { value: 'فروردین', label: 'فروردین' },
    { value: 'اردیبهشت', label: 'اردیبهشت' },
    { value: 'خرداد', label: 'خرداد' },
    { value: 'تیر', label: 'تیر' },
    { value: 'مرداد', label: 'مرداد' },
    { value: 'شهریور', label: 'شهریور' },
    { value: 'مهر', label: 'مهر' },
    { value: 'آبان', label: 'آبان' },
    { value: 'آذر', label: 'آذر' },
    { value: 'دی', label: 'دی' },
    { value: 'بهمن', label: 'بهمن' },
    { value: 'اسفند', label: 'اسفند' }
  ]
  return (
    <div className={"choice_input input_time_month"}>
      <Select name={props.name} options={months} placeholder="ماه" />
    </div>
  );
};

export const ChoiceTimeInput = (props: { name: string; id: string }) => {
  return (
    <div className={"time_input"}>
      <span className={"input_time_title"}>{props.name}</span>
      <ChoiceMonthInput name={props.id + "Month"} />
      <ChoiceYearInput name={props.id + "Year"} />
    </div>
  );
};
