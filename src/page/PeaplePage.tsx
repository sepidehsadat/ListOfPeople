import React, { useState } from "react";
import Style from "./PeaplePage";
import List from "../components/List";

export interface TypePeople {
  id: number;
  fullName: string;
  age: number;
  img: string;
  bio?: string;
}

const PeaplePage = () => {
  const [peoples, setPeoples] = useState<TypePeople[]>([
    { id: 1, fullName: "sepideh", age: 27, img: "test", bio: "test" },
    { id: 2, fullName: "sara", age: 27, img: "test", bio: "test" },
  ]);
  return (
    <div className="">
      <h4 className="alert alert-info">مدیریت اشخاص</h4>
      {peoples.map((people) => (
        <>
          <List people={people} />
        </>
      ))}
    </div>
  );
};
export default PeaplePage;
