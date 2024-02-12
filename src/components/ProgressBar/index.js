// ProgressBar.js
import React from "react";
import "./styles.css"; // Import your CSS file

export default function ProgressBar() {
  return (
    <section className="progressBar">
      <div className="progressBarContainer">
        <div className="progressBarLoader"></div>
      </div>
    </section>
  );
}
