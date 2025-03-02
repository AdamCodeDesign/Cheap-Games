import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

export default function Login({ setToken }) {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
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
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });
            if (error) throw error;
            console.log(data);
            setToken(data);
            navigate("/bucket");
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
                }}>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        width: "360px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
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
                            placeholder="Enter Password"
                            name="password"
                            required
                            onChange={handleChange}
                            style={{ fontSize: "1.5em", padding: "3px" }}
                        />
                    </label>

                    <button
                        type="submit"
                        style={{ fontSize: "1.5em", padding: "3px" }}>
                        Login
                    </button>
                    <NavLink
                        to="/rules"
                        style={{ marginTop: "20px", fontSize: "1em" }}>
                        I forgot my password!
                    </NavLink>
                    <NavLink
                        to="/signup"
                        style={{ marginTop: "20px", fontSize: "1em" }}>
                        You don't have an account? SIGN UP!
                    </NavLink>
                </form>
            </div>
        </>
    );
}
