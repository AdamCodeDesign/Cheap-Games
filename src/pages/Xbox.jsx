import React from "react";
import Genres from "../components/Genres";

export default function Xbox() {
    return (
        <>
            {/* <Browser filter="parent_platforms=3" /> */}
            <Genres platform="?&parent_platforms=3" />
        </>
    );
}
