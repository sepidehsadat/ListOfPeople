import { Dispatch, FC, FormEvent, SetStateAction, createRef } from "react";
import PInput from "../components/PInput";
import "./AddForm.css"
import React from "react";
import TypePeople from "../types/PeopeleType"
import PTextArea from "./PTextArea";
import PButton from "./PButton";
import PTitle from "./PTitle";

interface IProps
{
  peoples: TypePeople[];
  setPeoples: Dispatch<SetStateAction<TypePeople[]>>;
}
const AddForm: FC<IProps> = ({ peoples, setPeoples }) =>
{
  const myRef = React.useRef<HTMLDivElement>(null);

  // const name = React.createRef<PInput>();
  // const image = React.createRef<PInput>();

  const handleSubmit = (): void =>
  {
    // if (name.current?.getValue() && image.current?.getValue())
    // {
    //   const new_people = {
    //     id: Math.floor(Math.random() * 1000000),
    //     name: String(name.current.getValye),
    //     image: String(image.current?.getValue()),
    //     bio: String(bio.current?.getValue()),
    //   }
    //   setPeoples([
    //     ...peoples,
    //     new_people
    //   ]);
  }

  return (
    <div className="parent_form">
      <PTitle title="Add People" />
      <PInput placeholder="Please enter name ..." type="text" />
      <PInput placeholder="Please enter image ..." type="text" />
      <PTextArea placeholder="Please enter bio ..." title="bio" />
      <PButton onclick={handleSubmit} />
    </div>
  );
};
export default AddForm;
