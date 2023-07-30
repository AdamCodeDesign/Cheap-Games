import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Basket from "../pages/Basket";
import Login from "../pages/Login";
import ShopRules from "../pages/ShopRules";
import Promo from "../pages/Promo";
import NewGames from "../pages/NewGames";
import PC from "../pages/PC";
import Playstation from "../pages/Playstation";
import Xbox from "../pages/Xbox";
import AllGames from "../pages/AllGames";

export default function Main() {
  return (
    <>
      <main className="main">
        <div className="main_container container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rules" element={<ShopRules />} />
          <Route path="/promo" element={<Promo />} />
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
