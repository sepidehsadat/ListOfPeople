
import React from "react";
import Style from "./PInput.module.css";

interface IProps
{
    title: string;
    placeholder: string;
}

interface IState
{
    value: string;
}

export default class PInput extends React.Component<IProps, IState> {
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            value: "",
        };
        this.setValue = this.setValue.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    setValue(e: React.ChangeEvent<HTMLInputElement>): void
    {
        this.setState({ value: e.target.value });
    }
    getValue(): string
    {
        return this.state.value;
    }
    override render()
    {
        return (
            <div className={Style.form}>
                <span className={Style.title}>{this.props.title}</span>
                <input
                    onChange={this.setValue}
                    className={Style.ja_input}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}



