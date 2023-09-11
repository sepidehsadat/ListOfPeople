import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import PInput from "../components/PInput";
import "./AddForm.css"
// import React from "react";
import { TypePeople } from "../page/HomePage";

interface IProps
{
  peoples: TypePeople[];
  setPeoples: Dispatch<SetStateAction<TypePeople[]>>;
}
const AddForm: FC<IProps> = ({ peoples, setPeoples }) =>
{
  // name = React.createRef<PInput>();
  const [fullName, setFullName] = useState<string>("");
  const [age, setAge] = useState<string | number>("");
  const [img, setImg] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const handleResetState = (): void =>
  {
    setFullName("");
    setAge("");
    setImg("");
    setBio("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void =>
  {
    event.preventDefault();
    if (!fullName)
    {
      return alert("نام و نام خانوادگی الزامی می باشد");
    }

    if (!age)
    {
      return alert("سن الزامی می باشد");
    }

    if (!img)
    {
      return alert("آدرس تصویر الزامی می باشد");
    }

    setPeoples([
      ...peoples,
      {
        id: Math.floor(Math.random() * 1000000),
        fullName,
        age: Number(age),
        img,
        bio,
      },
    ]);

    handleResetState();
  };

  return (
    <div className="col-md-6 col-lg-6 mx-auto">
      <form
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
        className="form"
      >
        {/* <JAInput title="Name:" placeholder="Please enter name ..." ref={this.name} /> */}
        <input
          type="text"
          className="form-control mb-2"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="نام و نام خانوادگی"
        />
        <input
          type="number"
          className="form-control mb-2"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="سن"
        />
        <input
          type="text"
          className="form-control mb-2"
          name="img_url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="آدرس تصویر پروفایل"
        />
        <textarea
          className="form-control mb-2"
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={7}
          placeholder="بیوگرافی"
        />
        <button type="submit" className="btn btn-success">
          افزودن به لیست
        </button>
      </form>
    </div>
  );
};
export default AddForm;
