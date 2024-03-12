import React, { useEffect, useState } from "react";
import "./referral.css";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
const Referral = () => {
  const [referral, setReferral] = useState("");
  const { address, isConnected } = useWeb3ModalAccount();
  useEffect(() => {
    if (isConnected) {
      setReferral(`${window.location.origin}/?ref=${address}`);
    }
  }, [address]);
  return (
    <div style={{ padding: ".3rem" }}>
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
              // value with url + address
              // get the url from the window.location.origin
              value={referral}
            />
          </p>
          <button
            class="btn"
            id="copyreflink"
            onClick={() => {
              if (isConnected) {
                document.getElementById("referLink").select();
                document.execCommand("copy");
              } else {
                document.getElementById("refErr").style.display = "block";
              }
            }}
            style={{
              cursor: isConnected ? "pointer" : "not-allowed",
            }}
          >
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
