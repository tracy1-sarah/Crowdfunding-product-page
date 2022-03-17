import React from "react";

export default function BackProject() {
  return (
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      modal-dialog-scrollable
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Back this Project
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" style={{ color: "black", textAlign: "left" }}>
            <div className="row">
              <div className="container">
                <div className="Backproject col-md-12 container">
                <p className="about-text">Want to support us in bringing MasterCraft Monitor Riser out in the world?</p>

                    <div className="bamboo-stand">
                        
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
