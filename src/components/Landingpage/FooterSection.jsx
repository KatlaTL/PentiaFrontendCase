import prize from "../../assets/prize.svg";
import "./Sections.css";

export default function LandingPageFooterSection(props) {
    return (
        <section className="landingpage-section">
            <div id="footer-section">
                <div className="reveal">
                    <h2 className="section-h2">Få 10 gode råd om <br/>
                        digital transformation
                    </h2>
                    <p>Ja tak, jeg vil gerne høre mere om digital transformation</p>
                    <form id="call-me-form">
                        <fieldset>
                            <legend>Personal data</legend>
                            <input type="text" name="name" aria-label="name" placeholder="Navn" />
                            <input type="tel" name="mobile" aria-label="mobile" placeholder="Mobil" />
                            <input type="email" name="email" aria-label="e-mail" placeholder="e-mail" />
                            <input type="text" name="zipcode" aria-label="zip code" placeholder="Postnr." />
                            <input type="text" name="city" aria-label="city" placeholder="By" />
                        </fieldset>
                        <div id="call-me-form-cta">
                            <button type="submit">Ring mig op</button>
                        </div>
                    </form>
                    <div id="footer-section-prize">
                        {/* The alt tag should be empty for decorative images */}
                        <img src={prize} alt="" />
                        <h3>Pentia vinder pris for digital innovation 2017</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}