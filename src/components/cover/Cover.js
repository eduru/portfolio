import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Eduardo Ruiz</h1>
      <p>Composer | Sound Designer | Sofware Engineer</p>
    </div>
  );
};

export default Cover;
