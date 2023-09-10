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
            className="img-fluid rounded img-thumbnail"
            width={100}
            height={100}
            src={people.img}
            alt={people.fullName}
          />
          <div className="me-3">
            <p>
              <span className="h2">{people.fullName}</span>
              <span className="badge bg-primary me-3">سال {people.age}</span>
            </p>
            <p className="text-muted">{people.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeopleCard;
