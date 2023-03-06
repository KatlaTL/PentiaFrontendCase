import { useReducer, useState } from "react";
import prize from "../../assets/prize.svg";
import "./Sections.css";

const initialState = {
    //property names have to match the names of the input fields 
    name: "",
    mobile: "",
    email: "",
    zipcode: "",
    city: ""
}


export default function LandingPageFooterSection(props) {
    const [showForm, setShowForm] = useState(true);
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "update_value":
                const { name, value } = action.event.target;
                return {...state, [name]: value};
            case "submit_form":
                //Ideally there should be a database call here to save the form data
                let newState = {};
                for (const key of Object.keys(state)) {
                    newState = {...newState, [key]: ""}
                }
                setShowForm(false);
                return newState;
            default:
                return state;
        }
    }, initialState);

    const handleInputChange = (e) => {
        dispatch({type: "update_value", event: e});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "submit_form"});
    }


    return (
        <section className="landingpage-section">
            <div id="footer-section">
                <div className="reveal">
                    <h2 className="section-h2">Få 10 gode råd om <br/>
                        digital transformation
                    </h2>
                    <p className="section-p">Ja tak, jeg vil gerne høre mere om digital transformation</p>
                    <div id="footer-section-form">
                        {showForm ? (
                            <form id="call-me-form" onSubmit={handleSubmit}>
                                <fieldset>
                                    <legend>Personal data</legend>
                                    <input onChange={handleInputChange} value={state.name} type="text" name="name" aria-label="name" placeholder="Navn" />
                                    <input onChange={handleInputChange} value={state.mobile} type="tel" name="mobile" aria-label="mobile" placeholder="Mobil" />
                                    <input onChange={handleInputChange} value={state.email} type="email" name="email" aria-label="e-mail" placeholder="e-mail" />
                                    <input onChange={handleInputChange} value={state.zipcode} type="text" name="zipcode" aria-label="zip code" placeholder="Postnr." />
                                    <input onChange={handleInputChange} value={state.city} type="text" name="city" aria-label="city" placeholder="By" />
                                </fieldset>
                                <div id="call-me-form-cta">
                                    <button type="submit">Ring mig op</button>
                                </div>
                            </form>
                        ) : (
                            <p id="footer-registration-complete">Tak for din tilmeldelse</p>
                        )}
                    </div>

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