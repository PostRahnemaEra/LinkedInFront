import React from 'react'
import "./Header.Style.scss"

export const Header = (props:{name:string;}) => {
    return (
        <div className="w-full mx-auto text-center">
            <h1 className="Header_Name">
                {props.name}
            </h1>
        </div>
    );
};
