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
          console.log("Lista wszystkich gierek", data);
          const filteredGames = data.games.filter((game) => {
            return game.platforms.some(
              (platform) => parseInt(platform.first_release_date) > 2010
            );
          });
          // console.log({filteredGames})
          setList(filteredGames);
          console.log("przefiltrowane", filteredGames);
        }
      });
  }, []);

  console.log("to jest objekt", list)


  return (
    <>
      <Browser object={list} error = {error}/>
    </>
  );
}
