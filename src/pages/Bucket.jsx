import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { NavLink, useParams } from "react-router-dom";

export default function Bucket() {
  console.log("to jest supabase", supabase);
  const [fetchError, setFetchError] = useState("");
  const [gamesList, setGamesList] = useState([]);

  //state dla removeGame

  const [removeError, setRemoveError] = useState("")

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from("games").select();

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

  const removeGame = async (id)=> {
    const { data, error } = await supabase.from("games").delete().eq("id", id);

      if (error) {
        setRemoveError("Could not fetch games");
        console.log(error);
      }
      if (data) {
        setRemoveError("");
        console.log("to jest gra", data);
      }

      setGamesList(prevGameList=> (
        prevGameList.filter(el => el.id !== id)
      ))
    };
  
console.log("to jest gamesList", gamesList)
  return (
    <>
      <h1>to jest bucket</h1>
      {fetchError && <p>{fetchError}</p>}
      {gamesList && (
        <div>
          <table>
            <tbody>
            {gamesList.map((game) => {
              return (
                <tr style={{display:"flex"}} key={game.id}>
                  <td>{game.title}</td><td>{game.gatunek}</td><td>{game.platform}</td><td>{game.price}</td><td><img src="src/assets/delete-outline.svg" style={{width:"1em"}} onClick={()=>removeGame(game.id)}/></td>
                </tr>
               
              );
            })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
