import React from 'react'

import GameList from "../components/GameList";
import Browser from "../components/Browser";

export default function Playstation() {
  return (
    <>
      <Browser />
      <GameList filter = "platform=6"/>
    </>
  );
}