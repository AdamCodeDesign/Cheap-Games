import React, { useState, useEffect } from "react";

export default function NewGames() {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch("/moby/games?format=brief")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log('Lista gierek', data);
        setList(data);
      });
  }, []);

  return <div>NewGames</div>;
}
