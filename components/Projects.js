import styles from "../styles/Projects.module.sass"
import Project from "../components/Project"

const Projects = () => {
    return (
        <div className={styles.projects}>
            <Project imgSrc="/hero_bg.jpg" title="Creative Agency" liveLink="https://creative-agency.vercel.app" />
            <Project imgSrc="/hero_bg.jpg" title="Creative Agency" liveLink="https://creative-agency.vercel.app" />
        </div>
    )
}

export default Projects
