import React, { useState } from "react";
import "./HomePage.css";
import PeopleCard from "../components/PeopleCard";
import Add from "../components/AddForm";

export interface TypePeople
{
  id: number;
  fullName: string;
  age: number;
  img: string;
  bio?: string;
}

const HomePage = () =>
{
  const [peoples, setPeoples] = useState<TypePeople[]>([
    { id: 1, fullName: "sepideh", age: 27, img: "test", bio: "test" },
    { id: 2, fullName: "sara", age: 27, img: "test", bio: "test" },
  ]);
  return (
    <div className="home_page">
      <h4 className="alert alert-info title">مدیریت اشخاص</h4>
      <div className="list_people">
        {peoples.map((people) => (
          <>
            <PeopleCard people={people} />
          </>
        ))}
      </div>
      <Add peoples={peoples} setPeoples={setPeoples} />
    </div>
  );
};
export default HomePage;
