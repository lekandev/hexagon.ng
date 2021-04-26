import styles from "../styles/Services.module.sass"
import { Language, WebAssetSharp, PhoneAndroid, Web } from '@material-ui/icons'

function Services() {
    return (
        <div className={styles.services}>
            <div className={styles.services__single}>
                <div className={styles.services__icon}><Language /></div>
                <h3 className={styles.services__type}>Web development</h3>
                <p className={styles.services__desc}>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Minus, tempore.
                </p>
            </div>
            <div className={styles.services__single}>
                <div className={styles.services__icon}><PhoneAndroid /></div>
                <h3 className={styles.services__type}>App development</h3>
                <p className={styles.services__desc}>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Minus, tempore.
                </p>
            </div>
            <div className={styles.services__single}>
                <div className={styles.services__icon}><Web /></div>
                <h3 className={styles.services__type}>Product design</h3>
                <p className={styles.services__desc}>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Minus, tempore.
                </p>
            </div>
        </div>
    )
}

export default Services
