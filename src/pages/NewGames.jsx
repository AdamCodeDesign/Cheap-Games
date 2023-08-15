import React, { useState, useEffect } from "react";
import Genres from "../components/Genres";

export default function NewGames() {
  return (
    <>
      <Genres platform="?&dates=2023-01-01,2023-08-09" />
    </>
  );
}
