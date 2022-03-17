import React, { useState } from "react";
import BackProject from "../pages/BackProject";

export default function MasterCraft() {
  const [Bookmark, setBookmark] = useState("");

  const handleClicked = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="row"
      style={{ justifyContent: "center" }}
    >
      <div className="content col-6 ">
        <h4 className="header">Mastercraft Bamboo Monitor Riser</h4>
        <p className="p-text">
          A beautiful and handcrafted monitor stand to reduce neck and eye
          strain
        </p>
      <div className="container">
      <div className="row">
          <div className="col">
            <button type="button" className="btn btn-success" data-bs-toggle="modal"
                  data-bs-target="#exampleModal1">
              Back this project
              <BackProject />
            </button>
          </div>
          <div className="col form-check form-switch" style={{textAlign:"right"}}>
            <input
              role="switch"
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="success-outlined"
              autocomplete="off"
            />
            <label class="btn btn-outline-success" for="success-outlined">
              Bookmark
            </label>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
