

import React from "react";
import "./PTextArea.css";

interface IProps
{
    title: string;
    placeholder: string;
}

interface IState
{
    value: string;
}

export default class PTextArea extends React.Component<IProps, IState> {
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            value: "",
        };
        this.setValue = this.setValue.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    setValue(e: React.ChangeEvent<HTMLTextAreaElement>): void
    {
        this.setState({ value: e.target.value});
    }
    getValue(): string
    {
        return this.state.value;
    }
    override render()
    {
        return (
            <div className="form">
                <textarea
                    rows={4}
                    className="p_text_area"
                    onChange={this.setValue}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}



