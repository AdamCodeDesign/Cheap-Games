import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div
        className="container"
        style={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            width: "40%",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>
            Username
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required

              style={{fontSize:"1.5em", padding:"3px"}}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              style={{fontSize:"1.5em", padding:"3px"}}
            />
          </label>

          <button type="submit" style={{fontSize:"1.5em", padding:"3px"}}>Login</button>
          <NavLink
            to="/rules"
            style={{ marginTop: "20px", fontSize: "1em" }}
          >
            I forgot my password!
          </NavLink>
        </form>
      </div>
    </>
  );
}
