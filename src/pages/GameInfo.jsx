import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GameInfo() {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`/moby/games/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return {
          error: "Loading games...",
        };
      })
      .then((data) => {
        console.log({ data });
        if (data.error) {
          setList([]);
          setError(data.error);
        } else {
          setError("");
          console.log("Lista gierek", data);
          setList(data);
        }
      });
  }, []);
  return (
    <>
      {error && <div>{error}</div>}
      {list?.games?.map((game) => (
        <section className="gameInfo_container container row">
          <section className="gameContent col-8">
            <div className="screenshots col-12">screenshots</div>
            <div className="description col-12">opis gry sciagniety z bazy</div>
          </section>
          <section className="gameBuy col-4">
            <h1>{game.title}</h1>
            <p>{game.genres.map((genre) => genre.genre_name).join(" , ")}</p>
            <p>price</p>
            <button>Buy</button>
            <button>add to cart</button>
          </section>
        </section>
      ))}
    </>
  );
}
