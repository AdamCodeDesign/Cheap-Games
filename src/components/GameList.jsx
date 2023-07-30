import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import Browser from "./Browser"

export default function GameList() {
  console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [allgames, setGames] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      let { data, error } = await supabase.from("games").select();

      if (error) {
        setFetchError("Nie udało sie pobrac games");
        setGames(null);
        console.log(error);
      }
      if (data) {
        setGames(data);
        setFetchError(null);
      }
    };
    fetchGames();
  }, []);

  return (
    <>
      <Browser table= {allgames}/>
      <div className="gameList_container container">
        {fetchError && <p>{fetchError}</p>}
        {allgames && (
          <div className="gameList">
            {allgames.map((game) => {
              return (
                <div key={game.id} className="game">
                  {game.title}, {game.gatunek},{game.platform}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
