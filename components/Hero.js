import NavBar from "../components/NavBar";
import styles from "../styles/Hero.module.sass"

const Hero = () => {
    return (
        <>
            <NavBar />
            <div className={styles.hero}>
                <div className={styles.hero__content}>
                    <h2>Hexagon.ng</h2>
                    <p>We create software solutions that meet your needs</p>
                    <a href="#" className={styles.hero__button}>Services We Offer</a>
                </div>
            </div>
        </>
    )
}

export default Hero
