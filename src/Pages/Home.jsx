import React from 'react';
import { Link } from 'react-router-dom';
import PetConnectLogo from '../assets/PetConnectLogo.png';
import DemoSiteLogo from '../assets/DemoSiteLogo.png';

const Home = () => {
    return (
        <div>
            <div>
                <img src={DemoSiteLogo} alt="Team Laika logo" />
                <h1>Welcome!</h1>
                <nav>
                    If you're looking to learn more about me, you've come to the right place! This is my demo site. I'm a new, passionate developer with base-level experience in 
                    various web technologies. - please check out some of these links to get started:
                    <ul>
                        <li><Link to="/AboutMe">About Me</Link></li>
                        <li><Link to="/Skills">My Skills</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                All artistic renditions, clipart, and icons were created by me.
            </div>
        </div>
    );
};

export default Home;
