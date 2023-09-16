import React, { useEffect, useState } from "react";
import "./HomePage.css";
import PeopleCard from "../components/PeopleCard";
import Add from "../components/AddForm";
import profile from "../images/profile.webp"
import TypePeople from "../types/PTypes"
import { requests } from "../api/PServer"

const HomePage = () =>
{
  const [peoples, setPeoples] = useState<TypePeople[]>([
    { id: 1, name: "sepideh", image: profile, bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." },
    { id: 2, name: "sara", image: profile, bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
    { id: 3, name: "sara", image: profile, bio: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." },
  ]);
  useEffect(() =>
  {
    (async () =>
    {
      const songs = await requests.getData();
      console.log(songs)
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
