
import React, { FC, useState } from "react";
import "./PInput.css";

interface IProps
{
    placeholder: string;
    type: string;
}

interface IState
{
    value: string;
}
const PInput: FC<IProps> = ({ placeholder, type }) =>
{
    const [input, setInput] = useState("");

    const setValue = (e: React.ChangeEvent<HTMLInputElement>): void =>
    {
        setInput(e.target.value);
    }
    const getValue = (): string =>
    {
        return input;
    }

    return (
        <div className="form">
            <input
                type={type}
                onChange={setValue}
                className="p_input"
                placeholder={placeholder}
            />
        </div>
    );
};
export default PInput;






