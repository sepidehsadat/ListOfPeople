import React, { FC } from "react";

interface IPeople {
  id: number;
  fullName: string;
  img: string;
  bio?: string;
}
interface IProps {
  peoples: IPeople[];
}
const List: FC<IProps> = ({ peoples }) => {
  return (
    <div>
      {peoples.map((people) => (
        <>
          <div>{people.fullName}</div>
        </>
      ))}
    </div>
  );
};
export default List;
