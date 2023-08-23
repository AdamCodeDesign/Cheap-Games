import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [style, setStyle]= useState("60px")

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setStyle("500px")
  };

  return (
    <>
      <header className="header" style={{marginBottom:{style}}}>
        <div className="header_container container">
          <div className="logo">
            <NavLink to="/special">
              <span>C</span>
              heap <span>G</span>
              ames
            </NavLink>
          </div>
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
                  src="src/assets/cart-outline.svg"
                  alt="star"
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
                  src="src/assets/person-outline (1).svg"
                  alt="star"
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
