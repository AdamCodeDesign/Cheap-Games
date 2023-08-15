import React, { useState, useEffect } from "react";
import Browser from "../components/Browser";
import Genres from "../components/Genres";

export default function NewGames() {
  return (
    <>
      <Genres platform="&dates=2023-01-01,2023-08-09" />

      {/* <Browser filter = "?&dates=2023-01-01,2023-08-09"/> */}
    </>
  );
}
