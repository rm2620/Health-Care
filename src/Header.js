import React from "react";
import "./Header.css";
import { scroller } from "react-scroll";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  return (
    <div className="header">
      <img
        style={{ marginTop: 0 }}
        className="header__image"
        src="https://i.pinimg.com/originals/4a/04/b6/4a04b63e89aa075d733c4d38537e1600.png"
        alt=""
      />
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={(e) => {
                    history.push("/donate");
                  }}
                >
                  Donate
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Missions
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      <a class="nav-link" href="#funds">
                        Raise Funds
                      </a>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={(e) => {
                        history.push("/mental_health");
                      }}
                    >
                      Mental Health Awareness
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={(e) => {
                        history.push("/vaccination");
                      }}
                    >
                      Vaccination
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://covid-19-tracker-cfa43.web.app/"
                >
                  Covid-19 Tracker
                </a>
              </li>
            </ul>
            <a class="nav-link" href="#FAQs">
              FAQs
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
