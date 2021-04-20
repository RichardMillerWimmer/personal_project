import React from 'react';


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
        <div>
            {/* <video className='videoTag'
                autoPlay
                loop
                muted>
                <source src='https://www.youtube.com/embed/X3zHuHDJ0C0' />
            </video> */}
            {/* <iframe className='hero'
                src='https://www.youtube.com/embed/X3zHuHDJ0C0'
                opts={opts}
            /> */}
        </div>
    );
}

export default Hero;