import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div>
            <p>My name is Dia (or "Lydia"), and I am a novice, full stack web developer, with an interest in specializing in front end development. Having graduated from LaunchCode's 
            September 2023 Fullstack programme, I am now seeking opportunities to further my adventure as a developer.</p>
            <br></br>
            <p>My interest in technology started at a very young age. I have fond memories of going to work with my father, who worked as a developer at the time. Now working as a Kubernetes Autmation
            Architect, he and I have grown closer and I am proud that I am now able to share his passion on a deeper level, while going my own way at the same time. However, I am still forever
            grateful for the passion and knowledge he has passed on to me, and I am now looking forward to my own long career.</p>

            <p>Outside of my education as a FullStack web developer, I participate in quite a few hobbies in my past time. This includes gaming (personally a League of Legends and Stardew
            Valley fan), indoor plants, and - you may have guessed this one already - art!
            </p>
            <br></br>
            <br></br>
 
                <p><h1>The Techstack</h1></p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                </ul>

                <p><h1>My Socials</h1></p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><a href="https://github.com/marksofdespair" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://github.com/marksofdespair" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
        </div>
    )
}

export default AboutMe;
