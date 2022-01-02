import { Field } from "formik";
import React, { useState } from "react";
import "./Input.Style.scss";
import Select from "react-select";
import EmailSVG from "../../Icons/Email.svg";
import PassSVG from "../../Icons/Password.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

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
        <img src={EmailSVG} alt="" />
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
    // visible?<img src={EyeSVG} alt=""/> : <p>hi</p>
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
        <img src={PassSVG} alt="" />
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
    <div>
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
    <div>
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
