import styles from "../styles/Navbar.module.sass"

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.nav__logo}><h1>HEXAGON</h1></div>
            <ul className={styles.nav__items}>
                <li className={styles.nav__item}>Services</li>
                <li className={styles.nav__item}>About Us</li>
                <li className={styles.nav__item}>Projects</li>
                <li className={styles.nav__item}>Skills</li>
                <li className={styles.nav__item}></li>
            </ul>
        </div>
    )
}

export default NavBar

