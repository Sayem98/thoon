import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`sc-beySPh dZPFHi header-section ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <div className="container">
        <div className="gittu-header-content">
          <div className="gittu-header-left">
            <a className="gittu-header-logo" href="https://thoon.xyz/">
              <img
                src="https://launch.thoon.xyz/assets/logo-black-baby-24dae079.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="gittu-header-right">
            <div className="gittu-header-right-menu">
              <ul className="social-links">
                <li>
                  <a
                    href="https://t.me/+AbFsJ0Pfry5lMmNk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://launch.thoon.xyz/assets/telegram-b4a7f7ac.svg"
                      alt="icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ThoonMeme"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://launch.thoon.xyz/assets/twitter-a36d5187.svg"
                      alt="icon"
                    />
                  </a>
                </li>
              </ul>
              <div variant="v6" className="sc-guDLey fctTn">
                {/* <button className="connect-wallet-btn">
                  Connect <span>Wallet</span>
                </button> */}
                <w3m-button />
              </div>
              <div
                className={`menu-toggler ${isMenuOpen ? "menu-open" : ""}`}
                onClick={toggleMenu}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`menu-content ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="gittu-header-right-menu">
          <ul className=" jj">
            <li>
              <a
                href="https://t.me/+AbFsJ0Pfry5lMmNk"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://launch.thoon.xyz/assets/telegram-b4a7f7ac.svg"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ThoonMeme"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://launch.thoon.xyz/assets/twitter-a36d5187.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <a
          className="whitepaper-link"
          href="https://launch.thoon.xyz/assets/whitepaper-eb4fdaf8.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Whitepaper
        </a>
        <div variant="v6" className="sc-guDLey fctTn">
          <button className="connect-wallet-btn">
            Connect <span>Wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
