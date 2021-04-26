import styles from "Pricing.module.sass"

const Pricing = () => {
    return (
        <div className={styles.pricing}>
            <div className={styles.pricing__bronze}>
                <h3>Bronze</h3>
                <small className={styles.pricing__price}>$100</small>
                <ul className={styles.pricing__features}>
                    <li>Single Page</li>
                    <li>24hrs review and correction</li>
                    <li>Access to source Code</li>
                </ul>
            </div>
            <div className={styles.pricing__bronze}>
                <h3>Bronze</h3>
                <small className={styles.pricing__price}>$100</small>
                <ul className={styles.pricing__features}>
                    <li>Single Page</li>
                    <li>24hrs review and correction</li>
                    <li>Access to source Code</li>
                </ul>
            </div>
            <div className={styles.pricing__bronze}>
                <h3>Bronze</h3>
                <small className={styles.pricing__price}>$100</small>
                <ul className={styles.pricing__features}>
                    <li>Single Page</li>
                    <li>24hrs review and correction</li>
                    <li>Access to source Code</li>
                </ul>
            </div>
        </div>
    )
}

export default Pricing
