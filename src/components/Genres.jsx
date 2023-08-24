import React, { useState, useEffect } from "react";
import Browser from "./Browser";

export default function Genres({ platform , sale}) {
  const [genreList, setGenreList] = useState([]);
  const [error, setError] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/genres?&page_size=40&key=ded91ea1e19a4fe0b8f17f53458bc572`
    )
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
          setGenreList([]);
          setError(data.error);
        } else {
          setError("");
          setGenreList(data.results);
          setGenre(platform);
          console.log("Lista wszystkich genres", data.results);
        }
      });
  }, []);

  const switchGenre = (e) => {
    e.preventDefault();
    setGenre((prev) => (prev = e.target.value));
  };
  console.log("to jest genre", genre);

  return (
    <>
      {error && <div>{error}</div>}
      <label>select game genre</label>
      <select value={genre} onChange={switchGenre} style={{marginBottom:"30px", marginLeft:"15px",marginTop:"30px",width:"200px"}}>
        <option value={platform}>all</option>
        {genreList?.map((el) => (
          <option value={`${platform}&genres=${el.slug}`} key={el.slug}>
            {el.name}
          </option>
        ))}
      </select>
      {genre && <Browser filter={genre} sale={sale}/>}
    </>
  );
}
