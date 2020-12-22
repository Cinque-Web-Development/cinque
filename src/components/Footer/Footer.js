import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="cinque-section">
                <h3>&copy; 2020 - <a className="cinque-web" href="https://www.cinquewd.com" target="_blank" rel="noreferrer">Cinque Web Development</a></h3>
                <p></p>
            </div>
            <div className="social-links">
                <a className="cinque-social" href="https://github.com/Cinque-Web-Development" target="_blank" rel="noreferrer"><i className="link fab fa-github fa-3x"></i></a>
                <a className="cinque-social" href="https://twitter.com/cinquewebdev" target="_blank" rel="noreferrer"><i className="link fab fa-twitter fa-3x"></i></a>
               <a className="cinque-social" href="https://www.linkedin.com/company/cinque-web-dev" target="_blank" rel="noreferrer"><i className="link fab fa-linkedin fa-3x"></i></a> 
            </div>
        </div>
    )
}
