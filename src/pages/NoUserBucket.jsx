import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import trash from "../assets/delete-outline.svg";

export default function NoUserBucket() {
    console.log("to jest supabase", supabase);
    const [fetchError, setFetchError] = useState("");
    const [gamesList, setGamesList] = useState([]);
    const [priceAllGames, setPriceAllGames] = useState(0);
    const [showBuyMessage, setShowBuyMessage] = useState(false);

    let allprice = priceAllGames;

    //state dla removeGame
    const [removeError, setRemoveError] = useState("");

    const fetchGames = async () => {
        const { data, error } = await supabase.from("bucket").select();

        if (error) {
            setFetchError("Could not fetch games");
            setGamesList([]);
            console.log("Could not fetch bucket", error);
            console.log(fetchError);
            return;
        }
        if (data) {
            setGamesList(data);
            setFetchError("");
            setPriceAllGames(
                data?.map((game) => game.price).reduce((a, b) => a + b, 0),
            );
            console.log("to jest bucket", data);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    const removeGame = async (id) => {
        const { data, error } = await supabase
            .from("bucket")
            .delete()
            .eq("id", id);

        if (error) {
            setRemoveError("Could not remove game");
            console.log(error);
        } else {
            setRemoveError("");
            console.log("to jest gra", data);
            fetchGames();
        }
    };

    const buyGame = () => {
        setShowBuyMessage((prev) => (prev = !showBuyMessage));
    };

    console.log("to jest gamesList", gamesList);

    return (
        <>
            <h1 style={{ marginTop: "100px", marginBottom: "50px" }}>
                Oto Twoja lista gier
            </h1>
            {fetchError && <p>{fetchError}</p>}
            {gamesList?.length > 0 ? (
                <div className="bucket-table container">
                    <table>
                        <thead>
                            <tr
                                className="col-12"
                                style={{
                                    color: "rgb(261,161,71)",
                                    padding: "10px",
                                    display: "flex",
                                }}>
                                <th className="col-3">title</th>
                                <th className="col-3">genre</th>
                                <th className="col-3">platform</th>
                                <th className="col-3">PLN</th>
                                <th className="col-3"></th>
                            </tr>
                        </thead>
                        <tbody className="row">
                            {gamesList.map((game) => {
                                return (
                                    <tr
                                        className="col-10"
                                        key={game.id}
                                        style={{
                                            borderTop:
                                                "1px solid rgb(256,161,71)",
                                            borderBottom:
                                                "1px solid rgb(256,161,71)",
                                            display: "flex",
                                        }}>
                                        <td className="col-2 bucket-list">
                                            {game.title}
                                        </td>
                                        <td className="col-2 bucket-list">
                                            {game.genre}
                                        </td>
                                        <td className="col-2 bucket-list">
                                            {game.platform}
                                        </td>
                                        <td className="col-2 bucket-list">
                                            {game.price}
                                        </td>
                                        <td className="col-2 bucket-list">
                                            <img
                                                src={trash}
                                                style={{
                                                    width: "1em",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                    removeGame(game.id)
                                                }
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div>suma do zapłaty : {allprice} pln/brutto</div>
                    <button className="bucket-buyButton" onClick={buyGame}>
                        buy
                    </button>
                    {showBuyMessage ? (
                        <p style={{ color: "greenyellow" }}>
                            Sorry, the website is not finish yet! Come back
                            later!
                        </p>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                <div>Nie masz gier w koszyku</div>
            )}
        </>
    );
}
