import React, { useState, useEffect } from "react";
import Card, { ICard } from "../Card/Card";
import axios from "axios";

let defaultData: ICard[] = [];
export const List = () => {
  const [list, setList] = useState(defaultData);
  useEffect(() => {
    axios
      .get("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then((res) => res.data)
      .then((data) => setList(data.articles));
  }, []);

  return (
    <div>
      {list.map((item: ICard) => (
        <Card data={item} />
      ))}
    </div>
  );
};
