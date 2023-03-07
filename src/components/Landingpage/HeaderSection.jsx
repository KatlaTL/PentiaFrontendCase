import zeppeliner from "../../assets/zeppeliner.svg"
import "./Landingpage.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function scrollToNextSection(e) {
    e.preventDefault()
    const element = document.getElementById("main-section");
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
}

export default function LandingPageHeaderSection(props) {  
    return (
        <section className="landingpage-section">
            <div id="header-section">
                <p>Lorem Ipsum</p>
                <div id="header-section-body">
                    <div className="svg-container">
                        {/* The alt tag should be empty for decorative images */}
                        <img src={zeppeliner} alt=""/>
                    </div>
                    <div id="header-section-text">
                        <h1>Digital transformation</h1>
                        <article>
                            <h2>Rådgivning. Implementering. Resultater</h2>
                            <p>Hvordan bliver din virksomhed en digital vinder i fremtiden?
                                Hvilke tiltag skal der til strategisk og taktisk for at dreje forretningen i den
                                rigtige retning? Hvilke elementer indeholder en succesfuld digital
                                transformation? Vi har svarene. Pentia kan hjælpe dig på hele rejsen fra
                                strategisk rådgivning til implementering.
                            </p>
                        </article>
                    </div>
                </div>
                <div id="header-section-interactive">
                    <a onClick={scrollToNextSection}>
                        <p>Start din rejse her</p>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </a>
                </div>
            </div>
        </section>
    );
}