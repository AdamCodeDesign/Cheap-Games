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
      {list && (
        <section className="gameInfo_container container">
                        <h1 className="gameTitle" style={{fontSize:"3em"}}>"{list.title}"</h1>
          <section className="gameImages row">
            <div className="screenshots col-12">
              {list?.sample_screenshots?.map((image, idx) => (
                <img
                  src={image.image}
                  alt="image"
                  className="boxImg"
                  key={idx}
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
