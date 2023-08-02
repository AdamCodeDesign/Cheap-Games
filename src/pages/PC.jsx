import React from "react";
import GameList from "../components/GameList";
import Browser from "../components/Browser";

export default function PC() {
  return (
    <>
      <Browser />
      <GameList filter = "platform=3"/>
    </>
  );
}
