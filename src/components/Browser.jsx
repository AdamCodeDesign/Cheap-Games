import React, { useState, useEffect , useCallback} from "react";
import { NavLink } from "react-router-dom";
import Genres from "./Genres";

const Browser = ({ filter }) => {
  // const [list, setList] = useState([]);
  const rawgApi = "https://api.rawg.io/api/games";
  const filterGame = filter;
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      rawgApi + filterGame + `&search=${searchQuery}`+"&page_size=40&key=ded91ea1e19a4fe0b8f17f53458bc572"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return {
          error: "Something went wrong :(",
        };
      })
      .then((data) => {
        if (data.error) {
          setResult([]);
          setError(data.error);
        } else {
          setError("");
          // setList(data.results);
          // setResult(searchGames(data.results, searchQuery))
          setResult(data.results)
          console.log("Lista wszystkich gierek", data);
        }
      });
  }, [filterGame, searchQuery]);

  
    // const searchGames = useCallback((fullList, searchQuery)=>{
    //   return fullList.filter((game) =>
    //   game.name.toLowerCase().includes(searchQuery)
    // );
    // },[]);
   
    console.log("to jest result",result)
  

  function AddToBucket() {
    return console.log("dodano do koszyka");
  }



  return (
    <>
    <div className="browser">
      <input
        id="browser_input"
        type="text"
        placeholder="Search game..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          // setResult(searchGames(list, e.target.value))
        }}
      />
      <section className="gameList_container">
        {error && <div>{error}</div>}
        {result?.map((game) => (
          <section className="gameBox" key={game.name}>
            
              <NavLink to={`/info/${game.id}`} style={{display: "inline-block", width:"50%"}}><div className="gameBox_img" style={{backgroundImage:`url(${game.background_image})`, backgroundSize:"cover", backgroundPosition:"center", borderRadius:"5px"}}></div>
              </NavLink>
            
            <article className="gameContent">
              <div className="gameHeader">
                <div className="ratingPoints">
                  {game.rating && (
                    <img src="src/assets/star-sharp.svg" alt="star" />
                  )}
                  <div className="points">{game.rating}</div>
                </div>
                <NavLink to={`/info/${game.id}`}>
                  <h6 className="gameTitle">{game.name}</h6>
                </NavLink>
                <p className="platform_name">
                  {game.platforms.map((el) => el.platform.name).join(" , ")}
                </p>
                <div>{game.genres.map(el=> <p key={el.id}>{el.name}</p>)}</div>
              </div>
              <div className="gamePrice">
                <p>
                  59<sup>99</sup>
                  <span>pln</span>
                </p>
              </div>
              <div className="addGame">
                <button className="addGame_btn" onClick={AddToBucket}>
                  <img src="src/assets/red-cross.svg" alt="add" />
                </button>
              </div>
            </article>
          </section>
        ))}
      </section>
    </div>
    </>
  );
};

export default Browser;
