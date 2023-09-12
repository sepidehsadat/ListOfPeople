import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import PInput from "../components/PInput";
import "./AddForm.css"
import React from "react";
import { TypePeople } from "../page/HomePage";

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

  const handleSubmit = (): void =>
  {
    if (name.current?.getValue() && age.current?.getValue() && image.current?.getValue())
    {
      const new_people = {
        id: Math.floor(Math.random() * 1000000),
        name: String(name.current?.getValue()),
        age: Number(age.current?.getValue()),
        image: String(image.current?.getValue()),
        bio: "test"
      }
      setPeoples([
        ...peoples,
        new_people
      ]);
    }
  };

  return (
    <div className="col-md-6 col-lg-6 mx-auto">
      <PInput title="name:" placeholder="Please enter name ..." type="text" ref={name} />
      <PInput title="age:" placeholder="Please enter age ..." type="text" ref={age} />
      <PInput title="image:" placeholder="Please enter image ..." type="text" ref={image} />
      {/* <textarea
          className="form-control mb-2"
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={7}
          placeholder="بیوگرافی"
        /> */}
      <button onClick={() => handleSubmit()} className="btn btn-success">
        افزودن به لیست
      </button>
    </div>
  );
};
export default AddForm;
