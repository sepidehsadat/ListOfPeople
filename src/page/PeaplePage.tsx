import React, { useState } from "react";
import Style from "./PeaplePage";
import List from "../components/List";

interface Istate {
  id: number;
  fullName: string;
  age: number;
  img: string;
  bio?: string;
}

export default function PeaplePage() {
  const [peoples, setPeoples] = useState<Istate[]>([
    { id: 1, fullName: "sepideh", age: 27, img: "test", bio: "test" },
    { id: 2, fullName: "sepideh2", age: 27, img: "test", bio: "test" },
  ]);
  return (
    <div className="">
      <List peoples={peoples} />
    </div>
  );
}
