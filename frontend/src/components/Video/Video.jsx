import React from "react";
import "./video.css";
const Video = () => {
    return (
        <div className="master">
            <video autoPlay loop muted className="background-video">
                <source src="/background_video.mp4" type="video/mp4" />
            </video>
            <div className="logo">
                <h1 className="motto">EMPOWERING INNOVATORS, SHAPING THE FUTURE</h1>
            </div>
        </div>
    );
};

export default Video;
