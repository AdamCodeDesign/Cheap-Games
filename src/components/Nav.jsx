import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header className="header">
        <div className="header_container container">
          <ul className="navlist">
            <ul>
              <li>
                <NavLink to="/promo" style={({ isActive }) => isActive ? { color: 'tomato' } : {}} end> Promo </NavLink>
              </li>
              <li>
                <NavLink to="/new" style={({ isActive }) => isActive ? { color: 'tomato' } : {}} end> New Games </NavLink>
              </li>
              <li>
                <NavLink to="/pc" style={({ isActive }) => isActive ? { color: 'tomato' } : {}} end> PC </NavLink>
              </li>
              <li>
                <NavLink to="/playstation" style={({ isActive }) => isActive ? { color: 'tomato' } : {}} end> Playstation </NavLink>
              </li>
              <li>
                <NavLink to="/xbox" style={({ isActive }) => isActive ? { color: 'tomato' } : {}} end> XBOX </NavLink>
              </li>
              <li>
                <NavLink to="/all" style={({ isActive }) => isActive ? { color: 'tomato' } : {}} end> All Games </NavLink>
              </li>
            </ul>
            <div className="logo">
              <NavLink to="/">
                <span>C</span>
                heap{" "}
                <span>G</span>
                ames
              </NavLink>
            </div>
            <ul>
              <li>
                <NavLink to="/contact" style={({ isActive }) => isActive ? { color: 'tomato' } : {}} end> contact </NavLink>
              </li>
              <li>
                <NavLink to="/bucket" style={({ isActive }) => isActive ? { color: 'tomato' } : {}} end> bucket </NavLink>
              </li>
              <li>
                <NavLink to="/login" style={({ isActive }) => isActive ? { color: 'tomato' } : {}} end> login </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </header>
    </>
  );
}
