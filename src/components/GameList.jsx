import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


export default function GameList({ filter }) {
  const [list, setList] = useState(null);
  const moby = "/moby/games?&";
  const filterGame = filter;

  useEffect(() => {
    fetch(moby + filterGame)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log("Lista gierek", data);

        setList(data);
      });
  }, [filterGame]);

  function AddToBucket(){
    return console.log("dodano do koszyka")
  }

  return (
    <>
      <section className="gameList_container">
        {list?.games?.map((game) => (
          <section className="gameBox" key={game.title}>
            <div className="gameBox_img">
            <NavLink to="/info"><img className="gameImg" src={game.sample_cover.image}></img></NavLink>
            </div>
            <article className="gameContent">
              <div className="gameTitle">
                <div className="ratingPoints">
                  {game.moby_score && (
                    <img src="src/assets/star-sharp.svg" alt="star" />
                  )}
                  <div className="points">{game.moby_score}</div>
                </div>
                <NavLink to="/info"><h6>{game.title}</h6></NavLink>
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
                <button className="addGame_btn" onClick={AddToBucket}>
                  <img src="src/assets/red-cross.svg" alt="add" />
                  </button>
              </div>
            </article>
          </section>
        ))}
      </section>
    </>
  );
}
