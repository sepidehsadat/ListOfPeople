
import React, { FC } from "react";
import "./PButton.css";

interface IProps
{
    onclick: React.MouseEventHandler<HTMLButtonElement>;
}

interface IState
{ }

const PButton: FC<IProps> = ({ onclick }) =>
{

    return (
        <>
            <button onClick={onclick} className="p_button" >
                Add
            </button>
        </>
    );
};
export default PButton;



