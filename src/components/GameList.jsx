import React from "react";
import { useState, useEffect } from "react";
import { NavLink , useParams} from "react-router-dom";

export default function GameList({ filter, save }) {
  const [list, setList] = useState(null);
  const rawgApi = "https://api.rawg.io/api/games?&";
  const filterGame = filter;


  useEffect(() => {
    fetch(rawgApi + filterGame + "&page_size=40&key=ded91ea1e19a4fe0b8f17f53458bc572")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log("Lista wszystkich gierek", data);

        setList(data);
      });
    save(list);
  }, [filterGame]);


  

  function AddToBucket() {
    return console.log("dodano do koszyka");
  }

  return (
    <>
      <section className="gameList_container">
        {list?.results?.map((game) => (
          <section className="gameBox" key={game.name}>
            <div className="gameBox_img">
              <NavLink to={`/info/${game.id}`}>
                <img className="gameImg" src={game.background_image}></img>
              </NavLink>
            </div>
            <article className="gameContent">
              <div className="gameHeader">
                <div className="ratingPoints">
                  {game.rating && (
                    <img src="src/assets/star-sharp.svg" alt="star" />
                  )}
                  <div className="points">{game.rating}</div>
                </div>
                <NavLink to={`/info/${game.id}`}>
                  <h6 className="gameTitle">{game.name}</h6>
                </NavLink>
                <p className="platform_name">
                  {game.platforms.map((el) => el.platform.name).join(" , ")}
                </p>
                <p>{game.genres[0].name}</p>
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
