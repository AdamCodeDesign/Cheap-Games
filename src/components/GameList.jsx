import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import Browser from "./Browser";

export default function GameList() {
  const [list, setList] = useState(null);
  const price = "99";

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
      <section className="gameList_container">
        {list?.games?.map((game) => (
          <section className="gameBox" key={game.title}>
            <div className="gameBox_img">
              {" "}
              <img className="gameImg" src={game.sample_cover.image}></img>
            </div>
            <article className="gameContent">
              <div className="gameTitle">
                <div className="ratingPoints">
                 {game.moby_score&&<img src="src/assets/star-sharp.svg" alt="star" />}
                  <div className="points">{game.moby_score}</div>
                </div>
                <h6>{game.title}</h6>
                <p className="platform_name">
                  {game.platforms.map((el) => el.platform_name).join(" , ")}
                </p>
                <p>{game.genres[0].genre_name}</p>
              </div>
              <div className="gamePrice">
                <p>
                  59<sup>99</sup>
                  <span>pln</span>
                </p>
              </div>
              <div className="addGame"><a href=""><img src="src/assets/red-cross.svg" alt="add" />add</a></div>
            </article>
          </section>
        ))}
      </section>
    </>
  );
}
