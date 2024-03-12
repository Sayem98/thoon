import React from "react";
import "./referral.css";
const Referral = () => {
  return (
    <div style={{padding:'.3rem'}}>
      <div class="app-container   flex flex--column bg-color">
        <div
          class="app__data-container flex flex--column"
          style={{ textAlign: "center" }}
        >
          <h1 className="title">
            Share and get paid
            <br /> instantly
          </h1>
          <span className="desc">
            Share your referral link and get paid instantly to your wallet for
            every referred thoon purchase.
          </span>
          <br />
          <p className="desc">Referral commission 5%</p>
          <br />
          <br />
          <p>
            <input
              type="text"
              id="referLink"
              readonly=""
              value="Please connect your wallet first"
            />
          </p>
          <button class="btn" id="copyreflink">
            Copy
          </button>
          <span></span>
          <p id="refErr" class="err" style={{ display: "none" }}>
            Please connect your wallet on Binance Smart Chain to generate your
            referral link!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Referral;
