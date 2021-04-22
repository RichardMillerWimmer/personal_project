import React from 'react';
import Demo from '../../images/DemoReel.mp4';

function Hero() {

    const opts = {
        playerVars: {
            autoplay: 1,
            loop: 1,
            modestBranding: 1,
            controls: 0,
            muted: 1
        }
    };

    return (
        <div className='hero'>
            <div className='heroText'>
                <h1>POLYMATH VISUALS</h1>
                <h3>Welcome to our texture packages store</h3>
            </div>
            <video className='videoTag'
                autoplay='autoplay'
                loop='loop'
                muted='muted'
            >
                <source src={Demo} type='video/mp4' />
            </video>
            {/* <iframe className='hero'
                autoplay='autoplay'
                src='https://www.youtube.com/embed/X3zHuHDJ0C0'
                opts={opts}
            /> */}
        </div>
    );
}

export default Hero;