import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import PInput from "../components/PInput";
import "./AddForm.css"
import React from "react";
import TypePeople from "../types/PTypes"
import PTextArea from "./PTextArea";
import PButton from "./PButton";

interface IProps
{
  peoples: TypePeople[];
  setPeoples: Dispatch<SetStateAction<TypePeople[]>>;
}
const AddForm: FC<IProps> = ({ peoples, setPeoples }) =>
{
  const name = React.createRef<PInput>();
  const age = React.createRef<PInput>();
  const image = React.createRef<PInput>();
  const bio = React.createRef<PTextArea>();

  const handleSubmit = (): void =>
  {
    debugger
    if (name.current?.getValue() && image.current?.getValue())
    {
      const new_people = {
        id: Math.floor(Math.random() * 1000000),
        name: String(name.current?.getValue()),
        image: String(image.current?.getValue()),
        bio: String(bio.current?.getValue()),
      }
      setPeoples([
        ...peoples,
        new_people
      ]);
    }
  };

  return (
    <div className="parent_form">
      <p className="title">Add People</p>
      <PInput title="name:" placeholder="Please enter name ..." type="text" ref={name} />
      <PInput title="image:" placeholder="Please enter image ..." type="text" ref={image} />
      <PTextArea placeholder="Please enter bio ..." title="bio" ref={bio} />
      <PButton onclick={handleSubmit} />
    </div>
  );
};
export default AddForm;
