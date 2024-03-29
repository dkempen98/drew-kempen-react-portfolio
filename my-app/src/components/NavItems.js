import React from 'react';
import logo from '../images/mtn-logo.png'
import resume from './directory/drew-kempen-resume.pdf'

// Create the different page routes: About, Projects and Contact Me

function NavList({ currentPage, changePage }) {
    return (
            <nav className="nav-container">
                <header id='nav-title'>
                    <img src={logo} alt='mountain logo' id='mtn-logo'></img>
                    <h1 id='title'>Drew Kempen</h1>
                </header>
                <input type={'checkbox'} class='nav-toggle' id='nav-toggle'></input>
                <label for="nav-toggle" className='nav-toggle-label'>
                    <span></span>
                </label>
                <ul id='nav-links'>
                    <li className="nav-items">
                        <a
                        href="#about"
                        onClick={() => changePage('About')}
                        className={currentPage === 'About' ? 'nav-text current' : 'nav-text'}
                        >
                        About Me
                        </a>
                    </li>
                    <li className="nav-items">
                        <a
                        href="#projects"
                        onClick={() => changePage('Projects')}
                        className={currentPage === 'Projects' ? 'nav-text current' : 'nav-text'}
                        >
                        Projects
                        </a>
                    </li>
                    <li className="nav-items">
                        <a
                        href="#contact"
                        onClick={() => changePage('Contact')}
                        className={currentPage === 'Contact' ? 'nav-text current' : 'nav-text'}
                        >
                        Contact
                        </a>
                    </li>
                    <li className="nav-items">
                        <a download={'drew-kempen-resume'} href={resume} className='nav-text'>
                        &#10515; Resume
                        </a>
                    </li>
                </ul>
            </nav>
      );
}

export default NavList