import React, { useState } from "react";
import GameList from "../components/GameList";
import Browser from "../components/Browser";

export default function PC() {
  //tu state - state, funkcjeDoZmiany
  const [data, setData] = useState(null);
  return (
    <>
      <Browser data={data} />
      <GameList filter="platform=3" save={(d) => setData(d)} />
    </>
  );
}
