import React from "react";

const Features = () => {
  return (
    <>
      <div
        id="features"
        className="no-bottom bg-[#0f0f0f]"
        style={{ backgroundSize: "cover" }}
      >
        <h1 className="text-white text-center text-[32px] font-bold mb-10 lg:mb-4 leading-10 ">
          Why Secure Grow Fund?
        </h1>
        <div
          className="small-border bg-color-2 "
          style={{ backgroundSize: "cover" }}
        />
        <div className="container  " style={{ backgroundSize: "cover" }}>
          <div
            className="row flex min-h-[94vh]  justify-evenly items-center"
            style={{ backgroundSize: "cover" }}
          >
            <div
              className="col-lg-6 w-[43%]  col-md-6 mb-sm-30 lead"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="feature-box f-boxed style-3"
                style={{ backgroundSize: "cover" }}
              >
                <i
                  className="wow fadeInUp bg-color-2 icofont-stop animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                />

                <div className="text " style={{ backgroundSize: "cover" }}>
                  <h4
                    className="wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    A Decentralized Ecosystem:
                  </h4>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.25s",
                      animationName: "fadeInUp",
                    }}
                  >
                    The program exclusively adheres to public blockchain technology,
                    ensuring complete decentralization, and its code algorithm is
                    self-sustaining, eliminating the necessity for third-party involvement
                    or interactions.
                  </p>
                </div>
                <i className="wm icofont-stop" />
              </div>
            </div>
            <div
              className="col-lg-6 w-[43%]  col-md-6 mb-sm-30 lead"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="feature-box f-boxed style-3"
                style={{ backgroundSize: "cover" }}
              >
                <i
                  className="wow fadeInUp bg-color-2 icofont-stop animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                />
                <div className="text " style={{ backgroundSize: "cover" }}>
                  <h4
                    className="wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Peer-to-Peer in nature:
                  </h4>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.25s",
                      animationName: "fadeInUp",
                    }}
                  > This concept is crafted to facilitate direct interaction between user
                    and the smart contract, with all transactions originating from
                    participants' wallets and going directly to other participants'wallets.


                  </p>
                </div>
                <i className="wm icofont-stop" />
              </div>
            </div>
            <div
              className="col-lg-6 w-[43%]   col-md-6 mb-sm-30 lead"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="feature-box f-boxed style-3"
                style={{ backgroundSize: "cover" }}
              >
                <i
                  className="wow fadeInUp bg-color-2 icofont-stop animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                />
                <div className="text " style={{ backgroundSize: "cover" }}>
                  <h4
                    className="wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Absolutely secure and transparent:
                  </h4>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.25s",
                      animationName: "fadeInUp",
                    }}
                  >

                    Our blockchain ensures algorithm integrity and member records
                    immutability, independent of a website, which primarily displays
                    statistics for convenience.
                  </p>
                </div>
                <i className="wm icofont-stop" />
              </div>
            </div>
            <div
              className="col-lg-6 w-[43%]  col-md-6 mb-sm-30 lead"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="feature-box f-boxed style-3"
                style={{ backgroundSize: "cover" }}
              >
                <i
                  className="wow fadeInUp bg-color-2 icofont-stop animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                />
                <div className="text " style={{ backgroundSize: "cover" }}>
                  <h4
                    className="wow fadeInUp animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Verified for Authenticated Smart Contract:
                  </h4>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.25s",
                      animationName: "fadeInUp",
                    }}
                  >An open-source smart contract, validated and built
                    on the Polygon blockchain, featuring 100% transparent
                    logic and code. Supported by the international and
                    decentralized USDT Cryptocurrency..
                  </p>
                </div>
                <i className="wm icofont-stop" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
