import React, { FC } from "react";

interface IPeople {
  id: number;
  fullName: string;
  img: string;
  bio?: string;
}
interface IProps {
  people: IPeople;
}
const List: FC<IProps> = ({ people }) => {
  return (
    <div>
      <div>{people.fullName}</div>
    </div>
  );
};
export default List;
