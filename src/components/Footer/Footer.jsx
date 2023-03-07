import "./Footer.css";

export default function LandingPageFooter(props) {
    return (
        <div id="landingpage-footer">
            <div className="footer-address-wrapper">
                <div className="footer-address">
                    <h3>København</h3>
                    <address>
                        Islandsbrygge 55 <br />
                        2300 København S
                    </address>
                </div>
                <div className="footer-address">
                    <h3>Aarhus</h3>
                    <address>
                        Skovvejen 2B <br />
                        8000 Aarhus C
                    </address>
                </div>
                <div className="footer-address">
                    <h3>Malmö</h3>
                    <address>
                        S:a Långgatan 25 <br />
                        211 44 Malmö, Sverige
                    </address>
                </div>
            </div>
            <div id="footer-info" className="footer-address-wrapper">
                <p>Pentia A/S  •  info@pentia.dk  •  +45 7023 3330  •  CVR-nr. 20868872</p>
            </div>
        </div>
    );
}