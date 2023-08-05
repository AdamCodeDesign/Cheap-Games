import React, { useState } from 'react';

const Browser = ({object, error}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    const filteredArray = object.filter(game => game.title.toLowerCase().includes(searchQuery))
    setResult(filteredArray);
  };

  function AddToBucket(){
    return console.log("dodano do koszyka")
  }

  return (
    <div className='browser'>
      <input id='browser_input'
        type="text"
        placeholder="Search game..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <section className="gameList_container">
        {error && <div>{error}</div>}
        {result && result.map((game) => (
           <section className="gameBox" key={game.title}>
           <div className="gameBox_img">
             {" "}
             <img className="gameImg" src={game.sample_cover.image}></img>
           </div>
           <article className="gameContent">
             <div className="gameTitle">
               <div className="ratingPoints">
                 {game.moby_score && (
                   <img src="src/assets/star-sharp.svg" alt="star" />
                 )}
                 <div className="points">{game.moby_score}</div>
               </div>
               <h6>{game.title}</h6>
               <p className="platform_name">
                 {game.platforms.map((el) => el.platform_name).join(" , ")}
               </p>
               <p>{game.genres[0].genre_name}</p>
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
  );
};

export default Browser;

