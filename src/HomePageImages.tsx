import { Carousel } from "antd";
import React from "react";

const HomePageImages = () => {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598',
            phrase: 'A San Francisco Bridge',
        },
        {
            url: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7',
            phrase: 'A hand and a bird in the snow',
        },
        {
            url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
            phrase: 'A Chinese temple',
        }
    ]

        return (
            <Carousel style={{ margin: "auto", marginTop: 20, width: "50%" }} autoplay dotPosition="top">
                {images.map((images, index) => (
                    <div key={index}>
                        <img style={{ width: "40%", height: "40%", margin: "auto" }} src={images.url} alt="slide" />
                        <h3 style={{ marginTop: 5 }}>{images.phrase}</h3>
                    </div>
                ))}
            </Carousel>
        );
    }

export default HomePageImages;