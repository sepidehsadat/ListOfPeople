import React from "react";
import "./PTitle.css";

interface IProps
{
    title: string;
}

interface IState { }

export default class PTitle extends React.Component<IProps, IState> {
    override render()
    {
        return (
            <header
                className="title_container"
            >
                <h2
                    className="title"
                >
                    {this.props.title}
                </h2>
            </header>
        );
    }
}


