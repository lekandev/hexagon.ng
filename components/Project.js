import styles from "../styles/Project.module.sass"

const Project = ({ imgSrc, title, liveLink }) => {
    return (
        <div className={styles.project}>
            <img src={imgSrc} className={styles.project__img} alt="project"/>
            <h3 className={styles.project__title}>{title}</h3>
            <a href={liveLink} className={styles.project__link}>View</a>
        </div>
    )
}

export default Project
