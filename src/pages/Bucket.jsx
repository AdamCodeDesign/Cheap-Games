import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

export default function Bucket() {
  console.log("to jest supabase", supabase);
  const [fetchError, setFetchError] = useState("");
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from("games").select("*");

      if (error) {
        setFetchError("Could not fetch games");
        setGamesList([]);
        console.log(error);
      }
      if (data) {
        setGamesList(data);
        setFetchError("");
        console.log("to jest games", data);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      <h1>to jest bucket</h1>
      {fetchError && <p>{fetchError}</p>}
      {gamesList && (
        <div>
          <ul>
            {gamesList.map((game) => {
              return (
                <li key={game.title}>
                  {game.title}-{game.gatunek}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
