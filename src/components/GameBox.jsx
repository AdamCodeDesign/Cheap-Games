import React from "react";

export default function GameBox() {
  return (
    <>
      <div className="gameList_container">
        {list?.games?.map((game) => (
          <div key={game.title}><img className="gameImg" src={game.sample_cover.image} style={{width:"240px", height: "240px"}}></img>,{game.title}</div>
        ))}
      </div>
    </>
  );
}
