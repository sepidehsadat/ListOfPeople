
import React from "react";
import "./PButton.css";

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
                <button onClick={this.props.onclick} className="p_button" >
                    Add
                </button>
            </>
        );
    }
}



