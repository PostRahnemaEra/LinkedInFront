import React from "react";
import { Card } from "./Card";

const CardContainer = ({
  children,
  right,
}: {
  children: JSX.Element | JSX.Element[];
  right: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="flex justify-center h-full main">
      {right}
      <div id="center" className="w-3/5 max-w-xl mx-3.5 mt-9">
        {children}
      </div>
      <div id="left" className="w-1/5 max-w-xs mt-9"></div>
    </div>
  );
};

export const CardContainerWithFollow = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <CardContainer
    right={
      <div id="right" className="w-1/5 max-w-xs mt-9 ">
        
      </div>
    }
  >
    {children}
  </CardContainer>
);

export const CardContainerWithoutFollow = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <CardContainer
    right={
      <div id="right" className="w-1/5 max-w-xs mt-9">
        
      </div>
    }
  >
    {children}
  </CardContainer>
);
