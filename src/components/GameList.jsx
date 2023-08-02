import React from "react";
import { useState, useEffect } from "react";
import GameBox from "./GameBox";

export default function GameList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch("/moby/games?")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log("Lista gierek", data);

        setList(data);
      });
  }, []);

  return (
    <>
     <GameBox list ={list}/>
    </>
  );
}
