import { FunctionComponent } from "react";
import styles from './Dialog.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectProps } from "../../../interfaces";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from "react-responsive";

interface DialogProps {
    project: ProjectProps,
    closeDialog: () => void
}

const DialogCompo: FunctionComponent<DialogProps> = ({ project, closeDialog }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <AnimatePresence>
            <Dialog open={true} onClose={closeDialog}
                PaperProps={{
                    sx: {
                        maxWidth: 'md',
                        color: 'rgba(255, 255, 255, 0.87)',
                        backgroundColor: '#242424',
                        border: '1px solid rgba(255, 255, 255, 0)',
                        borderRadius: '0.75rem'
                    },
                }}>
                <motion.div
                    style={{ padding: isMobile ? '15px' : '30px' }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={styles['dialog-heading-div']}>
                        <div className={styles.project}><div className={styles['project-title']}>{project.name}
                        </div>
                            <p className={styles['project-subtext']}>Project</p>
                        </div>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={closeDialog}
                            aria-label="close"
                        >
                            <CloseIcon fontSize={isMobile ? 'small' : 'medium'} />
                        </IconButton>
                    </div>
                    <div className={styles['project-desc']}>
                        <div className={styles['project-subtitle']}>Associated with
                            <b> {project.location}</b></div>
                        <p><b>Timeline: </b>{project.timeline}</p>
                        {project?.client && <p><b>Client Location: </b>{project?.client}</p>}
                        <p>
                            <b>Tech Stack: </b>
                            <div className={styles["lists-container"]}>
                                <div className={styles["list"]}>
                                    <ul>
                                        {project.skills.map((skill, index) => {
                                            let techStackList = isMobile ? project.skills.length : Math.ceil(project.skills.length / 2);
                                            if (index < techStackList) {
                                                return <li key={index}>{skill}</li>;
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </div>
                                {!isMobile && <div className={styles["list"]}>
                                    <ul>
                                        {project.skills.map((skill, index) => {
                                            if (index >= Math.ceil(project.skills.length / 2)) {
                                                return <li key={index}>{skill}</li>;
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </div>}
                            </div>
                        </p>
                        <b>Description:</b>
                        <p>{project.description}</p>
                    </div>
                </motion.div>
            </Dialog>
        </AnimatePresence >);
}

export default DialogCompo;