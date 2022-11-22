import Demo from '../../images/DemoReel.mp4';

function Hero() {

    return (
        <div className='hero'>
            <div className='heroText'>
                <h1>POLYMATH<br></br> VISUALS</h1>
                <h3>Welcome to our texture packages store</h3>
            </div>
            <video className='videoTag'
                autoPlay
                loop
                muted
            >
                <source src={Demo} type='video/mp4' />
            </video>
        </div>
    );
};

export default Hero;