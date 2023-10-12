// src/components/NewsButtons.js
import React from "react";
import "./Button.css";

function NewsButtons({ onSelectLanguage }) {
  return (
    <div className="buttons-container">
      <button
        onClick={() => onSelectLanguage("jp")}
        className="button jp-button"
      >
        Today JP
      </button>
      <button
        onClick={() => onSelectLanguage("cn")}
        className="button cn-button"
      >
        Today CN
      </button>
      <button
        onClick={() => onSelectLanguage("us")}
        className="button us-button"
      >
        Today US
      </button>
    </div>
  );
}

export default NewsButtons;
