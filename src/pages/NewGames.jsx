import React from "react";
import Genres from "../components/Genres";

export default function NewGames() {
    return (
        <>
            <h1
                style={{
                    fontSize: "3rem",
                    color: "#37BFC9",
                    marginTop: "100px",
                    marginBottom: "30px",
                }}>
                New games from 2025
            </h1>
            <Genres platform="?&dates=2025-01-01,2025-02-28" sale={1} />
        </>
    );
}
