import { useState } from "react";
import styles from "./Header.module.css";
import navLinks from "../data/NavLinks";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="src/media/Netflix_icon.svg" alt="logo"  />
            </div>

            
            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            
            <nav className={`${styles.nav} ${open ? styles.show : ""}`}>
                <ul>
                    {navLinks.map((item, index) => (
                        <li className="text-white" key={index}>{item}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
