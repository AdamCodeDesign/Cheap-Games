import React, { useState, useEffect } from "react";
import Genres from "../components/Genres";

export default function NewGames() {
  return (
    <>
    <h1 style={{fontSize:"3rem", color: "#37BFC9", marginTop:"100px", marginBottom:"30px"}}>Games of 2024 year</h1>
      <Genres platform="?&dates=2024-01-01,2024-04-23" sale={1}/>
    </>
  );
}
