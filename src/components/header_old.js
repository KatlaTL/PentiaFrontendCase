import logo from '../assets/logo192.png';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <img src={logo} className="header-logo" alt="logo" />
            <BrowserRouter>
                <nav id="header-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="header-subnav">
                            <Link to="/services">Services</Link>
                            <ul className="header-subnav-content">
                                <li><Link to="/services/react">React</Link></li>
                                <li><Link to="/services/html">Html5</Link></li>
                                <li><Link to="/services/css">CSS3</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="services">
                        <Route index element={<Services/>} />
                        <Route path="react" element={<Reacttest/>} />
                        <Route path="html" element={<Html/>} />
                        <Route path="css" element={<Css/>} />
                    </Route>
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>

            </BrowserRouter>
        </header>
    );
}


//Dummy components for test of routes
function Home(props) {
    return (<h1>Home</h1>)
}
function Services(props) {
    return (<h1>Services</h1>)
}
function Reacttest(props) {
    return (<h1>React</h1>)
}
function Html(props) {
    return (<h1>HTML</h1>)
}
function Css(props) {
    return (<h1>CSS</h1>)
}
function About(props) {
    return (<h1>About</h1>)
}
function Contact(props) {
    return (<h1>Contact</h1>)
}
function Error(props) {
    return (<h1>Page not found</h1>)
}

export default Header;