import React from "react";
import Pledge from "../pages/Pledge";

export default function About() {
  return (
    <div className="row">
      <div className="container">
      <div className="content-about col-md-6 container">
          <h4 className="about-header container">About this project</h4>
          <p className="about-text container">
            The Mastercraft Bamboo Monitor Riser is a study and stylish platform
            that elevates your screen to a more comfortable viewing height.
            Placing your monitor at eye level has the potential to improve your
            posture and make you more comfortable while at work, helping you
            stay focused on the task at hand.
          </p>
          <p className="about-text container">
            Featuring artisan craftmanship, the smplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          {/* Bamboo Stand */}
          <div className="container">
          <div className="bamboo-stand">
          <div className="row container">
              <div className="col-6 container">
                <div>
                  <h4 className="bamboo-header">Bamboo Stand</h4>
                </div>
              </div>
              <div className="col-6">
                <p className="bamboo-text">Pledge $25 or more</p>
              </div>
            </div>
            <div>
              <p className="about-text container">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'lll be added to a
                special Backer member list.
              </p>
            </div>
            <div className="row container">
              <div className="col-6">
                <h2 className="bamboo-header">
                  101<span className="span-p-text">left</span>
                </h2>
              </div>
              <div
                className="col-6"
                style={{ textAlign: "right" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                <button type="button" className="btn btn-success">
                  Select Reward
                </button>
                <Pledge />
              </div>
            </div>
          </div>
          </div>          
          {/* Black Edition Stand */}
          <div className="container">
          <div className="bamboo-stand">
            <div className="row container">
              <div className="col-6 container">
                <div>
                  <h4 className="bamboo-header">Black Edition Stand</h4>
                </div>
              </div>
              <div className="col-6">
                <p className="bamboo-text">Pledge $75 or more</p>
              </div>
            </div>
            <div>
              <p className="about-text container">
                You get an ergonomic stand made of natural bamboo. You'll be
                added to our Backer member list. Shipping is included.
              </p>
            </div>
            <div className="row container">
              <div className="col-6 container">
                <h2 className="bamboo-header">
                  64<span className="span-p-text">left</span>
                </h2>
              </div>
              <div className="col-6" style={{ textAlign: "right" }}>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Select Reward
                </button>
                <Pledge />
              </div>
            </div>
          </div>
          </div>
          {/* Mahogany special edition */}
          <div className="container">
          <div className="bamboo-stand">
            <div className="row container">
              <div className="col-6 container">
                <div>
                  <h4 className="bamboo-header">Mahogany Special Edition</h4>
                </div>
              </div>
              <div className="col-6">
                <p className="bamboo-text">Pledge $200 or more</p>
              </div>
            </div>
            <div>
              <p className="about-text container">
                You get two Special Edition Mahogany stands, a Backer T shirt,
                and a personal thank you. You'll be added to our Backer member
                list. Shipping is included.
              </p>
            </div>
            <div className="row container">
              <div className="col-6 container">
                <h2 className="bamboo-header">
                  0<span className="span-p-text">left</span>
                </h2>
              </div>
              <div className="col-6" style={{ textAlign: "right" }}>
                <button type="button" className="btn btn-secondary">
                  Out of stock
                </button>
              </div>
            </div>
          </div>
        </div>  
        </div>  
      </div>
    </div>
  );
}
