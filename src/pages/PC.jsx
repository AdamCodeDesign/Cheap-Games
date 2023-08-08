import React, { useState } from "react";
import GameList from "../components/GameList";
import Browser from "../components/Browser";

export default function PC() {
  //tu state - state, funkcjeDoZmiany
  const [data, setData] = useState([]);
  console.log("to jest PC data", data)
  return (
    <>
      <Browser data={data} />
      <GameList filter="parent_platforms=1" save={(d) => setData(d)} />
    </>
  );
}
