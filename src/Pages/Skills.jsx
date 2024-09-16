import React from 'react';
import { Link } from 'react-router-dom';
import Game from '../Components/Game';

const Skills = () => {
    return (
        <div>
            The following is a list of skills I have established basic, but confident knowledge in.
            <br></br>
            <br></br>
                <p><h1>The Techstack</h1></p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                </ul>
            
            The following are examples of some of these practical skills:
            <br></br>
            <br></br>
                <p><h1>Interactivity</h1></p>
                    <p>How about we test your memory?</p>
                    <div className="Memory">
                        <h1>Memory Game</h1>
                        <Game />
                    </div>
                <p><h1>Transparency</h1></p>
                <p><h1></h1></p>
                <p><h1></h1></p>
                <p><h1></h1></p>
        </div>
    )
}

export default Skills;