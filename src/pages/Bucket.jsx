import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { NavLink, useParams } from "react-router-dom";

export default function Bucket() {
  console.log("to jest supabase", supabase);
  const [fetchError, setFetchError] = useState("");
  const [gamesList, setGamesList] = useState([]);
  const [priceAllGames, setPriceAllGames] = useState(0)

  let allprice = priceAllGames;

//  setPriceAllGames(gamesList?.map((game) => game.price).reduce((a, b) => a + b))


  //state dla removeGame
  const [removeError, setRemoveError] = useState("");

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
        // setPriceAllGames(gamesList.map((game) => game.price).reduce((a, b) => a + b))
        console.log("to jest games", data);
      }
    };

    fetchGames();
  }, []);

 

  const removeGame = async (id) => {
    const { data, error } = await supabase.from("games").delete().eq("id", id);

    if (error) {
      setRemoveError("Could not fetch games");
      console.log(error);
    }
    if (data) {
      setRemoveError("");
      console.log("to jest gra", data);
    }

    setGamesList((prevGameList) => prevGameList.filter((el) => el.id !== id));
    setPriceAllGames(gamesList.map((game) => game.price).reduce((a, b) => a + b, -99))

  };

  console.log("to jest gamesList", gamesList);
  
  return (
    <>
      <h1 style={{marginTop:"100px", marginBottom:"50px"}}>Twoja lista zakupów</h1>
      {fetchError && <p>{fetchError}</p>}
      {gamesList && (
        <div>
          <table>
            <thead>
              <tr className="col-12" style={{color:"rgb(261,161,71)", padding:"10px", display:"flex"}}>
              <th className="col-3">title</th>
              <th className="col-3">gatunek</th>
              <th className="col-3">platform</th>
              <th className="col-3">PLN</th>
              <th className="col-3"></th>
              </tr>
            </thead>
            <tbody className="row">     
              {gamesList.map((game) => {
                return (
                  <tr className="col-12"key={game.id} style={{borderBottom: "1px solid rgb(256,161,71)", display:"flex", }}>
                    <td className="col-3 bucket-list">{game.title}</td>
                    <td className="col-3 bucket-list">{game.gatunek}</td>
                    <td className="col-3 bucket-list">{game.platform}</td>
                    <td className="col-3 bucket-list">{game.price}</td>
                    <td className="col-3 bucket-list">
                      <img
                        src="src/assets/delete-outline.svg"
                        style={{ width: "1em" , cursor:"pointer"}}
                        onClick={() => removeGame(game.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>suma do zapłaty : {allprice} pln</div>
        </div>
      )}
    </>
  );
}
