import Demo from '../../images/DemoReel.mp4';

function Hero() {

    return (
        <div className='hero'>
            <div className='heroText'>
                <h1>HOUSE<br></br> 3D</h1>
                <h2>Welcome to our texture packages store</h2>
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