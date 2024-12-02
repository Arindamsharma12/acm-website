import React from "react";
import "./events.css";
import ImageSlider from './ImageSlider.jsx';

const Events = () => {
    const slides = [
        { url: "events.jpg.avif", title: "Quiz" },
        { url: "clubs3.jpg", title: "Quiz" },
        { url: "welcome2.jpg", title: "Quiz" },
        { url: "logo2.png", title: "Quiz" },
        { url: "hero.jpeg", title: "Quiz" },
    ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    return (
        <div className="master">
            <div className="bg-image"></div>
            <h1 className="heading">Past Events & Workshops</h1>
            <div className="event-section">
                <div style={containerStyles}>
                    <ImageSlider slides={slides} />
                </div>
            </div>
        </div>
    );
};

export default Events;
