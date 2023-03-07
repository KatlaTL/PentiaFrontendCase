import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landingpage/LandingPage";
import LandingPageNavigation from "./Navigation/Navigation"
import LandingPageFooter from "./Footer/Footer";

export default function App() {
    return (    
        <div>
            <header>
                <LandingPageNavigation />
            </header>
            
            <Routes>
                {/* The routes for the different nav links. For now they all just renders the LandingPage component */}
                <Route path="/" element={ <LandingPage/> } />
                <Route path="/services" element={ <LandingPage/> } />
                <Route path="/cases" element={ <LandingPage/> } />
                <Route path="/teknologi" element={ <LandingPage/> } />
                <Route path="/kontakt" element={ <LandingPage/> } />
                <Route path="/*" element={ <LandingPage/> } />
            </Routes>

            <footer>
                <LandingPageFooter />
            </footer>
        </div>
    );
}