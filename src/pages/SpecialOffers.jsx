import React , {useState, useEffect}from "react";

export default function NewGames() {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?&dates=2022-01-01,2022-12-31&page_size=40&key=ded91ea1e19a4fe0b8f17f53458bc572")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return {
          error: "Loading games...",
        };
      })
      .then((data) => {
        if (data.error) {
          setList([]);
          setError(data.error);
        } else {
          setError("");
          setList(data);
          console.log("Lista wszystkich gierek", data);
        }
      });
  }, []);

  return <div>Tu będa gry w promocji</div>;
}
