import React from "react";

export default function Statistics() {
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="content-statistics col-6">
        <div className="flex-end">
          <div className="row ">
            <div className="col-4">
              <h4 className="stats-header">$89,914</h4>
              <p className="p-text1">of $100,000 backed</p>
            </div>
            <div className="col-4">
              <h4 className="stats-header">5,007</h4>
              <p className="p-text">total backers</p>
            </div>
            <div className="col-4">
              <h4 className="stats-header">56</h4>
              <p className="p-text">days left</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              height: "10px",
              width: "80%",
              backgroundColor: "hsl(0, 0%, 48%)",
              borderRadius: "30px",
              marginTop: "1rem",
              position: "relative",
              margin: "auto",
            }}
          >
            <div
              style={{
                height: "10px",
                width: "80%",
                backgroundColor: "hsl(176, 50%, 47%)",
                borderRadius: "30px",
                position: "absolute",
                left: "0",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
