import React from "react";

function Previewpage({ content }) {
  return (
    <div className="previewpage">
      <div className="dash-header"></div>
      <div className="dash-details">{content}</div>
    </div>
  );
}

export default Previewpage;
