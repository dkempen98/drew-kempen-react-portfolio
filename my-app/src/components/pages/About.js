import React from 'react';

export default function About() {
    return(
        <div className='about-container'>
            <div className='about-1'>
                <h1>About Me</h1>
                <p>
                I am a developer from Columbus, Ohio who has experience with software testing and project management with Allita 360. I am attending a 2U full stack boot camp and plan to further my education with the program to learn Python. I also have some college experience where I received an Associates of Arts degree from The Ohio State University.        
                </p>
            </div>
            <div className='about-2'>
                <h1>What I Can Do</h1>
                <p>
                    I am a full stack developer with experience using the following tools:
                </p>
                <ul id='skill-list'>
                    <li>JavaScript</li>
                    <li>Node</li>
                    <li>React</li>
                    <li>Handlebars</li>
                    <li>Express</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                </ul>
            </div>
        </div>
    )
}