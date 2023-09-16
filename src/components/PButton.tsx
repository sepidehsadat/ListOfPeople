
import React from "react";
import "./PInput.css";

interface IProps
{
    onclick: React.MouseEventHandler<HTMLButtonElement>;
}

interface IState
{ }

export default class PButton extends React.Component<IProps, IState> {
    constructor(props: IProps)
    {
        super(props);
    }

    override render()
    {
        return (
            <>
                <button onClick={this.props.onclick} className="btn btn-success" >
                    افزودن به لیست
                </button>
            </>
        );
    }
}



