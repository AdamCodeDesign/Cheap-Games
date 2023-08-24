import React, { useState, useEffect } from "react";
import Genres from "../components/Genres";

export default function NewGames() {
  return (
    <>
    <h1 style={{fontSize:"3rem", color: "#37BFC9", marginTop:"100px", marginBottom:"30px"}}>Games of 2023 year</h1>
      <Genres platform="?&dates=2023-01-01,2023-08-09" sale={1}/>
    </>
  );
}
