import logo from "../../assets/logo.svg"
import "./Navigation.css";

export default function LandingPageNavigation(props) {
    return (
        <div id="landingpage-navigation">
            <div className="svg-container">
                <img src={logo} alt="Pentia"/>
            </div>
            <div id="landingpage-navigation-expand">
                <span className="expand-line"></span>
                <span className="expand-line"></span>
                <span className="expand-line"></span>
            </div>
        </div>
    );
}