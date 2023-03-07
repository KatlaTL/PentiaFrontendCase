import illustration1 from "../../assets/illustration1.svg";
import illustration2 from "../../assets/illustration2.svg";
import "./Landingpage.css";

export default function LandingPageMainSection(props) {
    return (
        <section className="landingpage-section">
            <div id="main-section">
                <div className="reveal">
                    <h2 className="section-h2">Vi kan hjælpe dig med <br/>
                        digital transformation på to fronter
                    </h2>
                    <div id="main-section-body">
                        <article>
                            {/* The alt tag should be empty for decorative images */}
                            <img src={illustration1} alt="" />
                            <h3>Strategisk rådgivning om <br/>
                                digital transformation
                            </h3>
                            <p>Udnytter din virksomhed
                                sit digitale potentiale?
                                Hvilke forretningsmuligheder
                                er der, og hvad betyder det
                                på et strategisk plan?
                            </p>
                        </article>
                        <article>
                            {/* The alt tag should be empty for decorative images */}
                            <img src={illustration2} alt="" />
                            <h3>Eksekvering af <br/> 
                                digital transformation
                            </h3>
                            <p>I ved, hvad I vil, men I har brug for
                             hjælp til at rulle strategien ud i 
                             forhold til organisationen og det
                             digitale fundament bl.a. på Sitecore.
                             Det handler om mennesker og resultater.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}