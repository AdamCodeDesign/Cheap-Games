import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "../pages/Contact";
import Bucket from "../pages/Bucket";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ShopRules from "../pages/ShopRules";
import SpecialOffers from "../pages/SpecialOffers";
import NewGames from "../pages/NewGames";
import PC from "../pages/PC";
import Playstation from "../pages/Playstation";
import Xbox from "../pages/Xbox";
import AllGames from "../pages/AllGames";
import GameInfo from "../pages/GameInfo";
import Genres from "./Genres";

export default function Main() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <>
      <main className="main">
        <div className="main_container container">
          <Routes>
            <Route path="/genres" element={<Genres />} />
            <Route path="/info/:id" element={<GameInfo />} />
            <Route path="/contact" element={<Contact />} />
            {token?<Route path="/bucket" element={<Bucket token = {token}/>} />:""}
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/rules" element={<ShopRules />} />
            <Route path="/" element={<SpecialOffers />} />
            <Route path="/new" element={<NewGames />} />
            <Route path="/pc" element={<PC />} />
            <Route path="/playstation" element={<Playstation />} />
            <Route path="/xbox" element={<Xbox />} />
            <Route path="/all" element={<AllGames />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
