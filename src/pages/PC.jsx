import React, { useState } from "react";
import GameList from "../components/GameList";
import Browser from "../components/Browser";
import Genres from "../components/Genres";

export default function PC() {
  return (
    <>
      <Genres platform ="&parent_platforms=1" />
      {/* <Browser filter="?&parent_platforms=1" /> */}
    </>
  );
}
