import React from 'react';
import git from '../images/git-logo.png';
import linkedIn from '../images/linkedin-logo.png';

export default function Footer() {
    return (
        <footer>
            <a href='https://github.com/dkempen98' target={'_blank'} id='footer-git'>
                <img src={git} alt='github logo' className='footer-image'></img>
            </a>
            <a href='https://www.linkedin.com/in/drew-kempen-a4a249237/' target={'_blank'}>
                <img src={linkedIn} alt='linkedIn logo' className='footer-image'></img>
            </a>
        </footer>
    )
}