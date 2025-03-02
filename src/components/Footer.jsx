import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <ul>
                    <NavLink to="/">
                        {" "}
                        <span style={{ color: "tomato", fontSize: "1.8em" }}>
                            C
                        </span>
                        heap{" "}
                        <span style={{ color: "tomato", fontSize: "1.8em" }}>
                            G
                        </span>
                        ames
                    </NavLink>
                    <NavLink
                        to="/contact"
                        style={({ isActive }) =>
                            isActive ? { color: "tomato" } : {}
                        }
                        end>
                        {" "}
                        contact{" "}
                    </NavLink>
                    <NavLink
                        to="/rules"
                        style={({ isActive }) =>
                            isActive ? { color: "tomato" } : {}
                        }
                        end>
                        {" "}
                        Shop rules{" "}
                    </NavLink>
                </ul>
            </div>
        </footer>
    );
}
