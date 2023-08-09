import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GameInfo() {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [screen, setScreen] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?&page_size=40&key=ded91ea1e19a4fe0b8f17f53458bc572`)
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
      fetch(`https://api.rawg.io/api/games/${id}/screenshots?&page_size=40&key=ded91ea1e19a4fe0b8f17f53458bc572`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return {
          error: "Loading screens...",
        };
      })
      .then((data) => {
        console.log({ data });
        if (data.error) {
          setScreen([]);
          setError(data.error);
        } else {
          setError("");
          console.log("Lista screenów", data);
          setScreen(data);
        }
      });


  }, []);
  return (
    <>
      {error && <div>{error}</div>}
      {list && (
        <section className="gameInfo_container container">
                        <h1 className="gameTitle" style={{fontSize:"3em"}}>"{list.name}"</h1>
          <section className="gameImages row">
            <div className="screenshots col-12">
              {screen?.results?.map((image) => (
                <img
                  src={image.image}
                  alt="image"
                  className="boxImg"
                  key={image.id}
                />
              ))}
            </div>
          </section>
          <section className="gameContent row">
            <section className="description col-8">
              <div className="col-8">{list.description}</div>
            </section>
            <section className="gameBuy col-4">
              <h1>{list.title}</h1>
              <p>price</p>
              <p>{list.moby_score}</p>
              <div>
                {list?.genres?.map((genre) => (
                  <p key={genre.genre_id}>{genre.genre_name}</p>
                ))}
              </div>
              <button>Buy</button>
              <button>add to cart</button>
            </section>
          </section>
        </section>
      )}
    </>
  );
}
