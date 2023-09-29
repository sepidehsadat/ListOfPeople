import React, { useEffect, useState } from "react";
import "./HomePage.css";
import PeopleCard from "../components/PeopleCard";
import Add from "../components/AddForm";
import profile from "../images/profile.webp"
import PeopeleType from "../types/PeopeleType"
import { getPeopleAll } from "../api/PData"
import { requests } from "../api/PServer"
import PTitle from "../components/PTitle";
import JATable from "../components/PTable";

const HomePage = () =>
{
  const [peoples, setPeoples] = useState<PeopeleType[]>([]);
  useEffect(() =>
  {
    // (async () =>
    // {
    // const songs = await requests.getData();
    // })();

    const people = getPeopleAll();
    setPeoples(people)

  }, []);

  return (
    <div className="home_page">
      <PTitle title="People List" />
      <div className="list_people">
        {peoples.map((people) => (
          <>
            <PeopleCard people={people} />
          </>
        ))}
      </div>
      <Add peoples={peoples} setPeoples={setPeoples} />
      {/* <JATable<PeopeleType>
        rowKey={"id"}
        // columns={columns}
        dataSource={peoples}
        onclick={false}
      /> */}
    </div>
  );
};
export default HomePage;
