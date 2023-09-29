import React, { useEffect, useState } from "react";
import "./HomePage.css";
import PeopleCard from "../components/PeopleCard";
import Add from "../components/AddForm";
import profile from "../images/profile.webp"
import TypePeople from "../types/PTypes"
import { requests } from "../api/PServer"

const HomePage = () =>
{
  const [peoples, setPeoples] = useState<TypePeople[]>([]);
  useEffect(() =>
  {
    (async () =>
    {
      const songs = await requests.getData();
      console.log(songs)
      // setPeoples(songs)
    })();

  }, []);

  return (
    <div className="home_page">
      <h4 className="alert alert-info title">People management</h4>
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
