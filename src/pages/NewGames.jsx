import React, { useState, useEffect } from "react";
import Browser from "../components/Browser";

export default function NewGames() {
 
  return (
    <>
      <Browser filter = "dates=2023-01-01,2023-08-09"/>
    </>
  );
}
