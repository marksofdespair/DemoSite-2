import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div>
            My name is Dia (or "Lydia"), and I am a novice, full stack web developer, with an interest in specializing in front end development. Having graduated from LaunchCode's September 2023 Fullstack programme, I am now seeking opportunities to further my adventure as a developer.
            
            My interest in technology started at a very young age.
            <br></br>
            <br></br>
 
                <p><h1>The Techstack</h1></p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                </ul>

                <p><h1>Other Media</h1></p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><a href="https://github.com/marksofdespair" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://github.com/marksofdespair" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
        </div>
    )
}

export default AboutMe;
