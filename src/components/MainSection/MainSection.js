import React from "react";
import "./mainsection.css";

const MainSection = () => {
  return (
    <div className=" ">
      <div className="container">
        <div className="ggtt">
          <div className="col-lg-7">
            <h1 class="banner-title">
              <span>Thoon</span> The futur
              <br />
              of Memecoins
            </h1>
            <h4 class="banner-subtitle">
              Buy $Thoon and make your wallet great Again!
            </h4>
            <a
              href="/"
              className="whitepaper-btn "
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://launch.thoon.xyz/assets/document-text-f43aae96.svg"
                alt="icon"
              />
              Whitepaper
            </a>
          </div>
          <div class="col-lg-5">
            <div class="progress-card">
              <div class="d-flex justify-content-center">
                <div percentage="0.51" class="sc-fsYfdN dozwDl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="350px"
                    height="350px"
                    fill="rgba(255, 255, 255, 0.15)"
                    class="progressbar-svg"
                  >
                    <circle
                      class="progressbar-bg"
                      cx="175"
                      cy="175"
                      r="150"
                    ></circle>
                    <circle
                      class="progress-done"
                      cx="175"
                      cy="175"
                      r="150"
                      stroke-linecap="round"
                    ></circle>
                  </svg>
                  <div class="progressbar-inner">
                    <img
                      src="https://launch.thoon.xyz/assets/ellipse-2c4065e0.png"
                      alt="img"
                    />
                  </div>
                  <div class="progress-level">
                    <h2>0.51%</h2>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="progress-info">
                  <h5>Raised</h5>
                  <h5>50783</h5>
                </div>
                <div class="progress-info right">
                  <h5>Goal</h5>
                  <h5>10000000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="presale-card-wrapper">
              <div class="presale-card">
                <div class="presale-card-left">
                  <div class="presale-card-title">
                    <p>Presale Week </p>
                  </div>
                  <div class="presale-card-msg">
                    <p>The price increases every week. enjoy it now!</p>
                  </div>
                  <div class="presale-card-counter">
                    <p>Presale Starts in March 1</p>
                  </div>
                  <ul variant="v2" class="sc-gLLuof iQxcRT">
                    <li>
                      <p>Token Name</p>
                      <h6>Thoon</h6>
                    </li>
                    <li>
                      <p>Token Symbol</p>
                      <h6>$Thoon</h6>
                    </li>
                    <li>
                      <p>Current Price</p>
                      <h6>0.000139 BNB</h6>
                    </li>
                    <li>
                      <p>Minimum Buy</p>
                      <h6>0.034 BNB</h6>
                    </li>
                  </ul>
                </div>
                <div class="presale-card-right">
                  <div class="sc-iBdnpw kYFWru">
                    <div class="pay-with-content">
                      <div class="pay-with-content-left">
                        <button class="pay-with-button">
                          Buy on BNB
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANFSURBVHgBrZe9ThtBEMdnlnOEI2zhIpFCGiBFKmxLoQ8UwUlD4AkwEgUd8AbhCQIdRSTMEwTRRHYKSE+UA6oUCTQhUhpbNgkIn3eys/YdZ/s+FsRfOt2yH/PbmZ1bxggGqn7MD1uDTh6FeEuIU4AwCgTDehChpto2EtkS6Eu6cLJrYhNjgUNyRU1b9UDxBs8IqeQ4Yifzxj6LmBesi0p2RXn3zhQYtAEJcj09c1IKGe9X43P2PZDy8h6ESBtDr47XYsH1Sm5bdRbhHqXslYZmjhb9fcL/B3tqCn3wbFk/JiJl84Kj2L2ZtuqViSKC2DYxpKHjbej1zy24/rFlsgyIcD5dsHc9cPVTfjQxQPtqZ6Nxi/1QV7eA15y/OJaZt2s61JYlF+4K1f3jxmEfFg+lTlrt8UUldxoH7oXS1bl+4+CI12foufZ6oF6emFM5v3xb6OXhEjjne2A9nga0Urp/IDOpXWlVD6PMDYoBLAt9BUaIjVqPpvug8vJcP9x2vWf554ZJopwTAjAXCk2kgJxGG9T43gXlMX78cJ5z+XXJWxsmIfAlNiq5qmr3XYsc3sSTWW1Ig6wbEL+TLz7oeTxOzQaI5IjepNvm8ebvvbAzrzGYgqDumRJ71IG7nrBRkXreDlvHSwZqbzpQTLaTLizhBATJvxWMGAsTxs8PD7XyOPF0tvtMrZQX9uRkTKjVePPXnvY4QDVU3/A3tal84K44uZQhN7wM9J85e+Y/U52InY24a0N0IFqqaggbdRe6Z4odQFAi8RjP0e1oKEhJR0K0RGyp4vzZv4mCD96bSO7cKKi2geIAq/uqvGnSKUB0pdF7H5Ob5T4oZ2/Imd6sIzhLF47GRGbarkmiTYhR72fBwNtC9TrAHX7rz0k+EBvqVYtbFPZNmkLZW0dCyQOz19TCNTBQL9wUqiVx3a08u66HRiWrPMcVExv+CsQQupl6bXsFZH+xV86WEHEB7lGq5NlRJU/R39d3ZaYLx2pCfLIZS3naCw0Es1Izx6vqzBc5GeCOIr4WlQ1/eP2K/gmjikBLQJGAFhDjazIPSLjp/IMNLurC5iEYql7OzyHJKRDI/0fz2LlwNEj9XAGprl4Su84V2FFAV/8B50LRW/3ZcaUAAAAASUVORK5CYII="
                            alt="icon"
                          />
                        </button>
                      </div>
                      <div class="pay-with-content-right">
                        <ul class="pay-with-list">
                          <li>
                            <button class="active">
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANFSURBVHgBrZe9ThtBEMdnlnOEI2zhIpFCGiBFKmxLoQ8UwUlD4AkwEgUd8AbhCQIdRSTMEwTRRHYKSE+UA6oUCTQhUhpbNgkIn3eys/YdZ/s+FsRfOt2yH/PbmZ1bxggGqn7MD1uDTh6FeEuIU4AwCgTDehChpto2EtkS6Eu6cLJrYhNjgUNyRU1b9UDxBs8IqeQ4Yifzxj6LmBesi0p2RXn3zhQYtAEJcj09c1IKGe9X43P2PZDy8h6ESBtDr47XYsH1Sm5bdRbhHqXslYZmjhb9fcL/B3tqCn3wbFk/JiJl84Kj2L2ZtuqViSKC2DYxpKHjbej1zy24/rFlsgyIcD5dsHc9cPVTfjQxQPtqZ6Nxi/1QV7eA15y/OJaZt2s61JYlF+4K1f3jxmEfFg+lTlrt8UUldxoH7oXS1bl+4+CI12foufZ6oF6emFM5v3xb6OXhEjjne2A9nga0Urp/IDOpXWlVD6PMDYoBLAt9BUaIjVqPpvug8vJcP9x2vWf554ZJopwTAjAXCk2kgJxGG9T43gXlMX78cJ5z+XXJWxsmIfAlNiq5qmr3XYsc3sSTWW1Ig6wbEL+TLz7oeTxOzQaI5IjepNvm8ebvvbAzrzGYgqDumRJ71IG7nrBRkXreDlvHSwZqbzpQTLaTLizhBATJvxWMGAsTxs8PD7XyOPF0tvtMrZQX9uRkTKjVePPXnvY4QDVU3/A3tal84K44uZQhN7wM9J85e+Y/U52InY24a0N0IFqqaggbdRe6Z4odQFAi8RjP0e1oKEhJR0K0RGyp4vzZv4mCD96bSO7cKKi2geIAq/uqvGnSKUB0pdF7H5Ob5T4oZ2/Imd6sIzhLF47GRGbarkmiTYhR72fBwNtC9TrAHX7rz0k+EBvqVYtbFPZNmkLZW0dCyQOz19TCNTBQL9wUqiVx3a08u66HRiWrPMcVExv+CsQQupl6bXsFZH+xV86WEHEB7lGq5NlRJU/R39d3ZaYLx2pCfLIZS3naCw0Es1Izx6vqzBc5GeCOIr4WlQ1/eP2K/gmjikBLQJGAFhDjazIPSLjp/IMNLurC5iEYql7OzyHJKRDI/0fz2LlwNEj9XAGprl4Su84V2FFAV/8B50LRW/3ZcaUAAAAASUVORK5CYII="
                                alt="icon"
                              />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form action="/" method="post">
                      <div class="presale-item mb-35">
                        <div class="presale-item-inner">
                          <label>Pay token (BNB)</label>
                          <input type="number" placeholder="0" value="0" />
                        </div>
                        <div class="presale-item-inner">
                          <label>Get Token ($Thoon)</label>
                          <input type="number" placeholder="0" />
                        </div>
                      </div>
                    </form>
                    <div class="presale-item-msg"></div>
                    <div variant="pay" class="sc-guDLey hKEsDZ">
                      <button class="connect-wallet-btn">
                        Connect <span>Wallet</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MainSection;
