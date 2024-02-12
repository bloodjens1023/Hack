import logo from './img/products/logo.svg';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-md sticky-top navbar-shrink py-3 navbar-light" id="mainNav">
                <div className="container">
                    <img src={logo} width="50" height="50" alt="Logo" />
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <span>Elysium</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                        </ul>
                        <Link to="/inscription">
                            <motion.a whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} className="btn btn-outline-primary shadow inscrire" role="button" data-bss-hover-animate="pulse" href="" style={{ marginRight: "20px" }}>S'inscrire</motion.a>
                        </Link>
                        <Link to="/connection">
                            <motion.a whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} className="btn btn-primary shadow connecter" role="button" data-bss-hover-animate="pulse" href="signup.html" >Se connecter</motion.a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

