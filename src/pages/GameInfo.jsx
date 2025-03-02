import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addGameToBucket } from "../lib/addGameToCart";

export default function GameInfo() {
    const [game, setGame] = useState([]);
    const [error, setError] = useState("");
    const [screen, setScreen] = useState(null);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const [showBuyMessage, setShowBuyMessage] = useState(false);
    const [gameAdded, setGameAdded] = useState(false);

    //ustawiam state dla funkcji addGameToBucket
    const [title, setTitle] = useState("");
    const [gatunek, setGatunek] = useState("");
    const [platform, setPlatform] = useState("");
    const [price, setPrice] = useState(null);

    useEffect(() => {
        //przy pomocy parametru odnosze sie do ID kliknietej gry - patrz Navlink w Browser
        fetch(
            `https://api.rawg.io/api/games/${id}?&page_size=40&key=ded91ea1e19a4fe0b8f17f53458bc572`,
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
                console.log({ data });
                if (data.error) {
                    setGame([]);
                    setError(data.error);
                } else {
                    setError("");
                    console.log("Lista gierek", data);
                    setGame(data);
                    setTitle(data.name);
                    setGatunek(
                        data.genres?.map((genre) => genre.name).join(" , "),
                    );
                    setPlatform(
                        data.parent_platforms
                            ?.map((el) => el.platform.name)
                            .join(" , "),
                    );
                    setPrice(99);
                }
            });
        //sciagam screenshoty
        fetch(
            `https://api.rawg.io/api/games/${id}/screenshots?&page_size=40&key=ded91ea1e19a4fe0b8f17f53458bc572`,
        )
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

        //ściągam trailer z gry
        fetch(
            `https://api.rawg.io/api/games/${id}/movies?&page_size=40&key=ded91ea1e19a4fe0b8f17f53458bc572`,
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return {
                    error: "Loading movies...",
                };
            })
            .then((data) => {
                console.log({ data });
                if (data.error) {
                    setMovies([]);
                    setError(data.error);
                } else {
                    setError("");
                    console.log("Lista movies", data.results);
                    setMovies(data.results);
                }
            });
    }, []);

    const buyGame = () => {
        setShowBuyMessage((prev) => (prev = !showBuyMessage));
    };
    const addGameMessage = () => {
        setGameAdded((prev) => (prev = !gameAdded));
    };

    console.log("to jest price", price);
    return (
        <>
            {error && <div>{error}</div>}
            {game && (
                <section className="gameInfo_container container">
                    <h1 className="gameTitle" style={{ fontSize: "3em" }}>
                        "{game.name}"
                    </h1>
                    <section className="gameImages row">
                        {movies && (
                            <div className="trailers">
                                {movies.map((trailer, idx) => (
                                    <figure key={trailer.id}>
                                        <video
                                            src={trailer.data[480]}
                                            frameBorder="0"
                                            controls
                                            poster={trailer.preview}
                                            autoPlay={idx === 0}
                                            muted
                                        />
                                    </figure>
                                ))}
                            </div>
                        )}
                        <div className="screenshots">
                            {screen?.results?.map((image) => (
                                <div
                                    className="boxImg"
                                    style={{
                                        backgroundImage: `url(${image.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: "60px",
                                    }}
                                    key={image.id}></div>
                            ))}
                        </div>
                    </section>
                    <section className="gameContent row">
                        <section className="description col-8">
                            <div className="col-12">{game.description_raw}</div>
                        </section>
                        <section className="gameBuy col-4">
                            <h1 className="gameTitle">"{game.name}"</h1>
                            <div>
                                {game?.genres
                                    ?.map((genre) => genre.name)
                                    .join(" , ")}
                            </div>
                            <div>{price}pln</div>
                            <button
                                className="bucket-buyButton"
                                onClick={buyGame}>
                                buy
                            </button>
                            <button
                                onClick={async () => {
                                    try {
                                        await addGameToBucket({
                                            title,
                                            gatunek,
                                            platform,
                                            price,
                                        });
                                    } catch (error) {
                                        setError(error.message);
                                    }
                                    addGameMessage();
                                }}>
                                add to cart
                            </button>
                            {showBuyMessage && (
                                <p style={{ color: "greenyellow" }}>
                                    Sorry, the website is not finish yet! Come
                                    back later!
                                </p>
                            )}
                            {gameAdded ? (
                                <p style={{ color: "greenyellow" }}>
                                    Game added!
                                </p>
                            ) : (
                                ""
                            )}
                        </section>
                    </section>
                </section>
            )}
        </>
    );
}
