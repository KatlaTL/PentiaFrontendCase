import { useEffect } from "react";
import LandingPageHeaderSection from "./HeaderSection";
import LandingPageMainSection from "./MainSection";
import LandingPageFooterSection from "./FooterSection";
import useDocumentTitle from "../../hooks/useDocumentTitle";


//js function for scroll animation
function reveal() {
    const reveal = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveal.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveal[i].getBoundingClientRect().top;
        const elementVisable = 150;
        if (elementTop < windowHeight - elementVisable) {
            reveal[i].classList.add("active");
        } else {
            reveal[i].classList.remove("active");
        }
    }
}

export default function LandingPage(props) {
    //Use the useDocumentTitle custom hook to the set the page title
    useDocumentTitle("Landing Page");

    //use UseEffect to add the reveal function to the scroll event after the document is finished rendering
    useEffect(() => {
        document.addEventListener("scroll", reveal);  
        //removes the eventlistener for scroll before a new rerender happens, to avoid memory leak
        return () => {
            document.removeEventListener("scroll", reveal);
        };
    },[]);
    
    return (
        <main>
            <LandingPageHeaderSection />
            <LandingPageMainSection />
            <LandingPageFooterSection />
        </main>
    );
}
