import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header className="header">
        <div className="header_container container">
          <ul className="navlist">
            <ul>
              <li>
                <NavLink
                  to="/promo"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : {color:"rgb(251, 161, 70)"}
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
            <div className="logo">
              <NavLink to="/">
                <span>C</span>
                heap <span>G</span>
                ames
              </NavLink>
            </div>
            <ul>
              <li className="bucket">
                <NavLink
                  to="/bucket"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : {}
                  }
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
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : {}
                  }
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
          </ul>
        </div>
      </header>
    </>
  );
}
