import React, { FC } from "react";
import { TypePeople } from "../page/HomePage";
import "./PeopleCard.css";

interface IProps
{
  people: TypePeople;
}
const PeopleCard: FC<IProps> = ({ people }) =>
{
  return (
    <div className="people_card col-12 col-lg-6">
      <div className="card">
        <div className="card-body d-flex align-items-center">
          <img
            className="img-muted"
            width={100}
            height={100}
            src={people.image}
            alt={people.name}
          />
          <p>
            <span className="title">{people.name}</span>
          </p>
          <p className="text-muted">{people.bio}</p>
        </div>

      </div>
    </div>
  );
};
export default PeopleCard;
