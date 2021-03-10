import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <header 
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/70deccb9-9b6c-4be1-b781-18dd1bcd9264/85526aca-d658-4d80-8328-6e4355885e1e/AM-en-20210301-popsignuptwoweeks-perspective_alpha_website_small.jpg')`
            }}
            >
            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">Description</h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
