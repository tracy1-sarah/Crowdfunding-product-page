import React from "react";

export default function About() {
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="container">
        <div className="content-about col-md-6 container">
          <h4 className="about-header">About this project</h4>
          <p className="about-text">
            The Mastercraft Bamboo Monitor Riser is a study and stylish platform
            that elevates your screen to a more comfortable viewing height.
            Placing your monitor at eye level has the potential to improve your
            posture and make you more comfortable while at work, helping you
            stay focused on the task at hand.
          </p>
          <p className="about-text">
            Featuring artisan craftmanship, the smplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          {/* Bamboo Edition */}
          <div className="bamboo-stand">
            <div className="row">
              <div className="col-6">
                <div>
                  <h4 className="bamboo-header">Bamboo Stand</h4>
                </div>
              </div>
              <div className="col-6">
                <p className="bamboo-text">Pledge $25 or more</p>
              </div>
            </div>
            <div>
              <p className="about-text">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'lll be added to a
                special Backer member list.
              </p>
            </div>
            <div className="row">
              <div className="col-6">
                <h2 className="bamboo-header">101</h2>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-success">
                  Select Reward
                </button>
                {/* Black Edition Stand */}
              </div>
            </div>
          </div>
          <div className="bamboo-stand">
            <div className="row">
              <div className="col-6">
                <div>
                  <h4 className="bamboo-header">Bamboo Stand</h4>
                </div>
              </div>
              <div className="col-6">
                <p className="bamboo-text">Pledge $75 or more</p>
              </div>
            </div>
            <div>
              <p className="about-text">
                You get an ergonomic stand made of natural bamboo. You'lllbe added to our Backer 
                member list. Shipping is included.
              </p>
            </div>
            <div className="row">
              <div className="col-6">
                <h2 className="bamboo-header">64</h2>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-success">
                  Select Reward
                </button>
              </div>
            </div>
          </div>
          {/* Mahogany special edition */}
          <div className="bamboo-stand">
            <div className="row">
              <div className="col-6">
                <div>
                  <h4 className="bamboo-header">Bamboo Stand</h4>
                </div>
              </div>
              <div className="col-6">
                <p className="bamboo-text">Pledge $200 or more</p>
              </div>
            </div>
            <div>
              <p className="about-text">
                You get two Special Edition Mahogany stands, a Backer T shirt, and a 
                personal thank you. You'll be added to our Backer member list. Shipping is included.

              </p>
            </div>
            <div className="row">
              <div className="col-6">
                <h2 className="bamboo-header">0</h2>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-secondary">
                  Out of stock
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
