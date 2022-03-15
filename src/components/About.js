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
                    You get an ergonomic stand made of natural bamboo.
                    You've helped us launch our promotional campaign, and you'lll be added to a special
                    Backer member list.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
