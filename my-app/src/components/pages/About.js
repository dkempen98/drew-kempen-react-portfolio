import React from 'react';

export default function About() {
    return(
        <div className='about-container'>
            <div className='about-1'>
                <h1>About Me</h1>
                <p>
                Full stack web developer utilizing experience in a combination of fields ranging from software to farming to provide a unique point of view on web development and user-friendly design. Recently received certification in full stack web development through a program with The Ohio State University learning JavaScript, React, NoSQL, SQL, CSS, NodeJS, GraphQL and more. I also have working experience with clients and have good communication skills with both people who are working on software and have technical knowledge as well as people who are less technical but still know what they want out of a system. A big part of my work history has been bridging the gap between the people asking for features in an abstract manner and translating that into something concrete that the development team can work on and being the communication in the middle for any questions or changes from either side. I strive to work with the people making requests and deliver a final product that not only meets the needs but surpasses them wherever possible by looking at the big picture of a project and planning ahead.        
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