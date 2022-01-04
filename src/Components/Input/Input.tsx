import { Field } from "formik";
import React, { useState } from "react";
import "./Input.Style.scss";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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

export const EmailInput = () => {
  return (
    <div className={"email_input"}>
      <i className="mx-2">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </i>

      <Field
        type="text"
        dir={"ltr"}
        placeholder={"Email"}
        id={"email"}
        name={"email"}
      />
    </div>
  );
};

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);
  const Icon = (
    <FontAwesomeIcon
      icon={visible ? faEye : faEyeSlash}
      onClick={() => setVisibility((visible) => !visible)}
    ></FontAwesomeIcon>
  );
  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};
export const PassInput = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  return (
    <div className={"password_input"}>
      <i className="mx-2 lockIcon">
        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
      </i>

      <Field
        type={PasswordInputType}
        dir={"ltr"}
        placeholder={"Password"}
        id={"password"}
        name={"password"}
      />

      <i className="eyeIcon">{ToggleIcon}</i>
    </div>
  );
};

const ChoiceYearInput = (props: { name: string }) => {
  const years = [];
  for (let year = 1340; year < 1400; year++) {
    years.push({ value: `${year}`, label: `${year}` });
  }
  console.log(years);
  return (
    <div className="w-1/4 input_time_date">
      <Select name={props.name} options={years} placeholder="سال" />
    </div>
  );
};

const ChoiceMonthInput = (props: { name: string }) => {
  const months = [
    { value: "فروردین", label: "فروردین" },
    { value: "اردیبهشت", label: "اردیبهشت" },
    { value: "خرداد", label: "خرداد" },
    { value: "تیر", label: "تیر" },
    { value: "مرداد", label: "مرداد" },
    { value: "شهریور", label: "شهریور" },
    { value: "مهر", label: "مهر" },
    { value: "آبان", label: "آبان" },
    { value: "آذر", label: "آذر" },
    { value: "دی", label: "دی" },
    { value: "بهمن", label: "بهمن" },
    { value: "اسفند", label: "اسفند" },
  ];
  return (
    <div className="w-2/4 px-7 input_time_date">
      <Select name={props.name} options={months} placeholder="ماه" />
    </div>
  );
};

export const ChoiceTimeInput = (props: { name: string; id: string }) => {
  return (
    <div className={"time_input"}>
      <span className={"input_time_title w-1/4"}>{props.name}</span>
      <ChoiceMonthInput name={props.id + "Month"} />
      <ChoiceYearInput name={props.id + "Year"} />
    </div>
  );
};

export const CheckBoxInput = (props: { name: string }) => {
  return (
    <div className={"checkbox_input"}>
      <label htmlFor={"is_vendor"}>
        <Field type="checkbox" id={"is_vendor"} name={"is_vendor"} />
        <span>{props.name}</span>
      </label>
    </div>
  );
};

export const PictureInput = () => {
  return (
    <div className="flex">
      <div className={"file_input"} />
      <div className="mt-12">
        <label className=" file_input_label">
          <span>+ اضافه کردن تصویر پروفایل </span>
          <input type={"file"} name={"user_picture"} className="hidden" />
        </label>
      </div>
    </div>
  );
};
