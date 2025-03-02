import React from "react";
import Genres from "../components/Genres";

export default function Special() {
    const saleDiscount = 0.5;
    return (
        <>
            <h1
                style={{
                    fontSize: "2rem",
                    fontStyle: "italic",
                    color: "#37BFC9",
                    marginTop: "100px",
                    marginBottom: "30px",
                }}>
                Weekend promotion for games from 2023
            </h1>
            <Genres
                platform="?&dates=2023-01-01,2023-12-31&ordering=-rating"
                sale={saleDiscount}
            />
        </>
    );
}
