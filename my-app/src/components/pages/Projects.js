import React from 'react';
import bugTracker from '../../images/bugTrackerLogo.png'
import weather from '../../images/weather.png'
import lock from '../../images/lock.png'
import inlineDb from '../../images/sql.png'
import slugger from '../../images/slugger-image.png'
import mongoSocial from '../../images/social.png'
import git from '../../images/git-logo.png'

const moveLeft = () => {
    let container = document.getElementById('carousel')
    container.scrollLeft -= 400;
}
const moveRight = () => {
    let container = document.getElementById('carousel')
    container.scrollLeft += 400;
}

export default function Projects() {
    return(
        <div className='project-page'>
            <div aria-label='List of projects' id='carousel-container'>
                <button id='scroll-left' onClick={moveLeft}>&#8610;</button>
                <ul id='carousel'>
                    <li className='carousel-item'>
                        <a href='https://github.com/G3TSN1P3D/glowing-broccoli' target={'_blank'}>
                            <img className='project-image' src={slugger} alt='Baseball Base Logo'></img>
                        </a>
                        <div className='project-footer'>
                            Stat Tracker
                            <a href='https://github.com/G3TSN1P3D/glowing-broccoli' target={'_blank'}>
                                <img className='git-logo' src={git}></img>
                            </a>
                        </div>
                    </li>
                    <li className='carousel-item'>
                        <a href='https://congenial-potatoes.herokuapp.com/' target={'_blank'}>
                            <img className='project-image' src={bugTracker} alt='Bug Logo'>
                                
                            </img>
                        </a>
                        <div className='project-footer'>
                            Bug Tracker
                            <a href='https://github.com/IvanGoya/congenial-potato' target={'_blank'}>
                                <img className='git-logo' src={git}></img>
                            </a>
                        </div>
                    </li>
                    <li className='carousel-item'>
                        <a href='https://dkempen98.github.io/weather-watcher/' target={'_blank'}>
                            <img className='project-image' src={weather} alt='Weather Logo'></img>
                        </a>
                        <div className='project-footer'>
                            Weather Watcher
                            <a href='https://github.com/dkempen98/weather-watcher' target={'_blank'}>
                                <img className='git-logo' src={git}></img>
                            </a>
                        </div>
                    </li>
                    <li className='carousel-item'>
                        <a href='https://dkempen98.github.io/Fully-Random-Password-Generator/' target={'_blank'}>
                            <img className='project-image' src={lock} alt='Lock Logo'></img>
                        </a>
                        <div className='project-footer'>
                            Password Generator
                            <a href='https://github.com/dkempen98/Fully-Random-Password-Generator' target={'_blank'}>
                                <img className='git-logo' src={git}></img>
                            </a>
                        </div>
                    </li>
                    <li className='carousel-item'>
                        <a href='https://github.com/dkempen98/inline-company-database' target={'_blank'}>
                            <img className='project-image' src={inlineDb} alt='SQL Diagram Logo'></img>
                        </a>
                        <div className='project-footer'>
                            SQL Retail Inline Retail Database
                            <a href='https://github.com/dkempen98/inline-company-database' target={'_blank'}>
                                <img className='git-logo' src={git}></img>
                            </a>
                        </div>
                        
                    </li>
                    <li className='carousel-item'>
                        <a href='https://github.com/dkempen98/mongo-social' target={'_blank'}>
                            <img className='project-image' src={mongoSocial} alt='Generic Social Media Logo'></img>
                        </a>
                        <div className='project-footer'>
                            Social Media NoSQL Database
                            <a href='https://github.com/dkempen98/mongo-social' target={'_blank'}>
                                <img className='git-logo' src={git}></img>
                            </a>
                        </div>
                    </li>
                </ul>
                <button id='scroll-right' onClick={moveRight}>&#8611;</button>
            </div>
        </div>
    )
}