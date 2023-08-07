import React, {useState} from 'react'

import GameList from "../components/GameList";
import Browser from "../components/Browser";

export default function Playstation() {
  const [data, setData] = useState(null);

  return (
    <>
      <Browser data={data}/>
      <GameList filter = "platform=6" save={(d) => setData(d)}/>
    </>
  );
}