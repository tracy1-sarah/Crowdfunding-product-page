import React from "react";

export default function MasterCraft() {
  return (
    <div className="row" style={{ justifyContent: "center", textAlign:"center" }}>
      <div className="content col-6">
        <h4 className="header">Mastercraft Bamboo Monitor Riser</h4>
        <p className="p-text">
          A beautiful and handcrafted monitor stand to reduce neck and eye
          strain
        </p>
          <div className="row">
          <div className="col">
            <button type="button" className="btn btn-success">
              Back this project
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-secondary">
              <img src="icon-bookmark.svg" alt="bookmark" className="img-bookmark"/>
              Bookmark
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}
