import React, { ReactNode } from 'react'
import "./InitCard.Style.scss"

export const InitCard = (CardProps: {
    children?: ReactNode | undefined;
  }) => {
    return (
        <div className="Initial_Card_Pages">
            { CardProps.children }
        </div>
    );
}
