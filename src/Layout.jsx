import { NavBar } from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import DemoSiteLogoSM from './assets/DemoSiteLogoSM.png';
import './Layout.css'; 

export function Layout() {
    return (
        <div className="container">
            <header>
                <h1 className="logo">
                    <img src={DemoSiteLogoSM} alt="Habitual Nightmare Logo" />‎ ‎ Dia Marie - Full Stack Web Developer
                </h1>
            </header>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
