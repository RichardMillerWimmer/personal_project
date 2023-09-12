import facebook from '../../images/facebook-3-64.png'
import linkedin from '../../images/linkedin-3-64.png'
import youtube from '../../images/youtube-3-64.png'
import vimeo from '../../images/vimeo-3-64.png'
import behance from '../../images/behance-3-64.png'
import instagram from '../../images/instagram-3-64.png'



function Footer() {
    return (
        <footer className="footer">
            <h2>HOUSE 3D</h2>
            <ul className='footer__social-links'>
                <li>
                    <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer"><img src={linkedin} alt='linkedin link' /></a>
                </li>
                <li>
                    <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img src={facebook} alt='facebook link' /></a>
                </li>
                <li>
                    <a href='https://www.youtube.com/' target="_blank" rel="noreferrer"><img src={youtube} alt='youtube link' /></a>
                </li>
                <li>
                    <a href='https://vimeo.com/' target="_blank" rel="noreferrer"><img src={vimeo} alt='vimeo link' /></a>
                </li>
                <li>
                    <a href='https://www.behance.net/' target="_blank" rel="noreferrer"><img src={behance} alt='behance link' /></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><img src={instagram} alt='instagram link' /></a>
                </li>
            </ul>
            <h3>© HOUSE 3D</h3>
        </footer >
    );
};

export default Footer;