import { Field } from "formik";
import React from "react";
import "./Input.Style.scss"

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
    years.push(<option value={year}>{year}</option>);
  }
  return (
    <div className={"choice_input input_time_year"}>
      <Field as="select" name={props.name} className={"field_choice_input"}>
        {years}
      </Field>
    </div>
  );
};

const ChoiceMonthInput = (props: { name: string }) => {
  return (
    <div className={"choice_input input_time_month"}>
      <Field as="select" name={props.name} className={"field_choice_input"}>
        <option value="فروردین">فروردین</option>
        <option value="اردیبهشت">اردیبهشت</option>
        <option value="خرداد">خرداد</option>
        <option value="تیر">تیر</option>
        <option value="مرداد">مرداد</option>
        <option value="شهریور">شهریور</option>
        <option value="دی">دی</option>
        <option value="بهمن">بهمن</option>
        <option value="اسفند">اسفند</option>
      </Field>
    </div>
  );
};

export const ChoiceTimeInput = (props: { name: string; id: string }) => {
  return (
    <div className={"time_input"}>
      <span className={"input_time_title"}>{props.name}</span>
      <ChoiceYearInput name={props.id + "Year"} />
      <ChoiceMonthInput name={props.id + "Month"} />
    </div>
  );
};
