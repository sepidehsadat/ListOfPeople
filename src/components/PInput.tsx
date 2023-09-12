
import React from "react";
import "./PInput.css";

interface IProps
{
    title: string;
    placeholder: string;
    type: string;
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
            <div className="form">
                <input
                    type={this.props.type}
                    onChange={this.setValue}
                    className="p_input"
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}



