import { Carousel } from "antd";
import React from "react";

const HomePageImages = () => {
    const images = [
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598',
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7',
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4'
    ];

        return (
            <Carousel style={{ margin: "auto", marginTop: 20, width: "50%" }} autoplay dotPosition="top">
                {images.map((image, index) => (
                    <div key={index}>
                        <img style={{ width: 600, height: 600, margin: "auto" }} src={image} alt="slide" />
                        <h3> HELLO HELLOHEOvHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO</h3>
                    </div>
                ))}
            </Carousel>
        );
    }

export default HomePageImages;