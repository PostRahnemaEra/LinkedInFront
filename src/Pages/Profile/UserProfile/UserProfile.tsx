import React from "react";
import { Formik, Form } from "formik";
import { InitCard } from "../../../Components/InitCard/InitCard";
import { ChoiceTimeInput, EmailInput, StringInput } from "../../../Components/Input/Input";
import { Button } from "../../../Components/Button/Button";
import { Header } from "../../../Components/Header/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  description: "",
  title: "",
  company: "",
  startedAtMonth: "",
  startedAtYear: "",
  finishedAtMonth: "",
  finishedAtYear: "",
};

type FormValues = {
  firstName: string;
  lastName: string;
  username: string;
  description: string;
  title: string;
  company: string;
  startedAtMonth: string;
  startedAtYear: string;
  finishedAtMonth: string;
  finishedAtYear: string;
};

export const UserProfile = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <div className="Card_Container">
      <InitCard>
        <Header name={"پروفایل"} />
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <StringInput placeholder={"نام"} name={"firstName"} dir={"rtl"} />
            <StringInput
              placeholder={"نام خانوادگی"}
              name={"lastName"}
              dir={"rtl"}
            />
            <StringInput
              placeholder={"نام کاربری"}
              name={"username"}
              dir={"rtl"}
            />
            <StringInput
              placeholder={"توضیحات"}
              name={"description"}
              dir={"rtl"}
            />
            <StringInput
              placeholder={"آخرین عنوان شغلی"}
              name={"title"}
              dir={"rtl"}
            />
            <StringInput
              placeholder={"نام شرکت"}
              name={"company"}
              dir={"rtl"}
            />
            <EmailInput />
            <ChoiceTimeInput name={"تاریخ شروع"} id={"startedAt"}  />
            <ChoiceTimeInput name={"تاریخ پایان"} id={"finishedAt"} />
            <div className="my-8 mx-auto">
              <Button type="submit" gruop="Secondary" lang="fa" size="XXL">
                ثبت
              </Button>
            </div>
          </Form>
        </Formik>
      </InitCard>
    </div>
  );
};
