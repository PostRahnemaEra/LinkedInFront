import React from "react";
import "./InitCard.Style.scss";

export const InitCard = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <div className="Initial_Card_Pages">{children}</div>;
};
