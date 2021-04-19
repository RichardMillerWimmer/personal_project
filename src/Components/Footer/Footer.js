import React from 'react';
import facebook from '../../images/facebook-3-64.png'
import linkedin from '../../images/linkedin-3-64.png'
import youtube from '../../images/youtube-3-64.png'
import vimeo from '../../images/vimeo-3-64.png'
import behance from '../../images/behance-3-64.png'
import instagram from '../../images/instagram-3-64.png'



function Footer() {
    return (
        <div className="footer">
            <h2><a href='https://polymathvisuals.com/'>POLYMATH VISUALS</a></h2>
            <div className='socialLinks'>
                <a className='link' href='https://www.linkedin.com/company/polymathvisuals/?trk=public_profile_topcard_current_company' target="_blank"><img src={linkedin} alt='linkedin link' /></a>
                <a className='link' href='https://www.facebook.com/PolymathVisuals' target="_blank"><img src={facebook} alt='facebook link' /></a>
                <a className='link' href='https://www.youtube.com/channel/UCZqYbHW9B4e0wi3RNJo6LVA' target="_blank"><img src={youtube} alt='youtube link' /></a>
                <a className='link' href='https://vimeo.com/polymathvisuals' target="_blank"><img src={vimeo} alt='vimeo link' /></a>
                <a className='link' href='https://www.behance.net/ronnyyoung?tracking_source=search-all%7CRonny%20Young' target="_blank"><img src={behance} alt='behance link' /></a>
                <a className='link' href='https://www.instagram.com/polymathvisuals/?hl=en' target="_blank"><img src={instagram} alt='instagram link' /></a>
            </div>
            <h3>ronny.young@polymathvisuals.com</h3>
            <h3>© 2017 Polymath, LLC</h3>
        </div >
    );
}

export default Footer;