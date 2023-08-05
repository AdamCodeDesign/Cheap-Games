import React, { useState, useEffect } from "react";
import Browser from "../components/Browser";

export default function NewGames() {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/moby/games?")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return {
          error: "Loading games...",
        };
      })
      .then((data) => {
        if (data.error) {
          setList([]);
          setError(data.error);
        } else {
          setError("");
          console.log("Lista gierek", data);
          const filteredGames = data.games.filter((game) => {
            return game.platforms.some(
              (platform) => parseInt(platform.first_release_date) > 1999
            );
          });
          setList(filteredGames);
        }
      });
  }, []);

  return (
    <>
      <Browser object={list} error = {error}/>
      {/* <section className="gameList_container">
        {error && <div>{error}</div>}
        {list.map((game) => (
          <section className="gameBox" key={game.title}>
            <div className="gameBox_img">
              {" "}
              <img className="gameImg" src={game.sample_cover.image}></img>
            </div>
            <article className="gameContent">
              <div className="gameTitle">
                <div className="ratingPoints">
                  {game.moby_score && (
                    <img src="src/assets/star-sharp.svg" alt="star" />
                  )}
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
              <div className="addGame">
                <a href="">
                  <img src="src/assets/red-cross.svg" alt="add" />
                  add
                </a>
              </div>
            </article>
          </section>
        ))}
      </section> */}
    </>
  );
}
