import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import supabase from "../config/supabaseClient";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.name,
          },
        },
      });
      alert("check your email");
    } catch (error) {
      alert(error);
    }
  };
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
          onSubmit={handleSubmit}
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
              name="name"
              required
              onChange={handleChange}
              style={{ fontSize: "1.5em", padding: "3px" }}
            />
          </label>

          <label>
            e-mail
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={handleChange}
              style={{ fontSize: "1.5em", padding: "3px" }}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter Password (at least 6 characters)"
              name="password"
              required
              onChange={handleChange}
              style={{ fontSize: "1.5em", padding: "3px" }}
            />
          </label>

          <button type="submit" style={{ fontSize: "1.5em", padding: "3px" }}>
            Sign UP
          </button>
          <NavLink to="/login" style={{ marginTop: "20px", fontSize: "1em" }}>
            I already have an account
          </NavLink>
          
        </form>
      </div>
    </>
  );
}
