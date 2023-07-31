import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import Browser from "./Browser";

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
      <div className="gameList_container">
        {list?.games?.map((game) => (
          <div className="gameBox" key={game.title}>
           <div className="gameBox_img"> <img className="gameImg" src={game.sample_cover.image}></img></div>
            <div className="gameContent">
              <h6>{game.title}</h6>
              <p>{game.platforms.map(el => el.platform_name).join(" , ")}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
