import React, { FC } from "react";
import "./PTitle.css";

interface IProps
{
    title: string;
}

interface IState { }

const PTitle: FC<IProps> = ({ title }) =>
{

    return (
        <header className="title_container" >
            <h2 className="title">
                {title}
            </h2>
        </header>
    );
};
export default PTitle;


