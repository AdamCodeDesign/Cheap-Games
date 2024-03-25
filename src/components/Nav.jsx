import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import bucket from "../assets/cart-outline.svg"
import person from "../assets/person-outline (1).svg"

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header_container container">
          <div className="logo">
            <NavLink to="/special">
              <span>C</span>
              heap <span>G</span>
              ames
            </NavLink>
          </div>
          {/* //classNames npm */}
          <ul className={`navlist ${menuOpen ? "active" : ""}`}>
            <div className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="hamburger_menu">
              <li>
                <NavLink
                  to="/special"
                  style={({ isActive }) =>
                    isActive
                      ? { color: "tomato" }
                      : { color: "rgb(251, 161, 70)" }
                  }
                  end
                >
                  {" "}
                  Special Offers{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/new"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : {}
                  }
                  end
                >
                  {" "}
                  New Games{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pc"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : {}
                  }
                  end
                >
                  {" "}
                  PC{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/playstation"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : {}
                  }
                  end
                >
                  {" "}
                  Playstation{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/xbox"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : {}
                  }
                  end
                >
                  {" "}
                  XBOX{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : {}
                  }
                  end
                >
                  {" "}
                  All Games{" "}
                </NavLink>
              </li>
            </ul>
          </ul>
          <ul style={{ display: "flex" }}>
            <li className="bucket">
              <NavLink
                to="/bucket"
                style={({ isActive }) => (isActive ? { color: "tomato" } : {})}
                end
              >
                {" "}
                <img
                  src={bucket}
                  alt="bucket"
                  className="bucket_icon"
                />
              </NavLink>
            </li>
            <li className="login">
              <NavLink
                to="/login"
                style={({ isActive }) => (isActive ? { color: "tomato" } : {})}
                end
              >
                <img
                  src={person}
                  alt="person icon"
                  className="login_icon"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
