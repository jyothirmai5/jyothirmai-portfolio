import { FunctionComponent, useState } from "react";
import styles from './ProjectCard.module.scss';
import { motion } from "framer-motion"
import Dialog from "../Dialog/Dialog";
import { ProjectProps } from "../../../interfaces";

interface ProjectCardProps {
    project: ProjectProps
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
    const [showDialog, setShowDialog] = useState(false);

    const handleProjectClick = () => {
        setShowDialog(true);
    }

    const closeDialog = () => {
        setShowDialog(false);
    }

    return (
        <>
            <motion.div className={styles['project-card']}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleProjectClick}
            >
                <img className={styles['project-img']} src={project.imageUrl}></img>
                <div className={styles['project-desc']}>
                    <div className={styles['project-title']}>{project.name}</div>
                    <div className={styles['project-subtitle']}>{project.location}</div>
                </div>
            </motion.div>
            {
                showDialog && (
                    <Dialog project={project} closeDialog={closeDialog} />
                )
            }
        </>
    );
}

export default ProjectCard;