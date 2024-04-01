import { FunctionComponent } from "react";
import styles from './Dialog.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectProps } from "../../../interfaces";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface DialogProps {
    project: ProjectProps,
    closeDialog: () => void
}

const DialogCompo: FunctionComponent<DialogProps> = ({ project, closeDialog }) => {
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
                    style={{ padding: '30px' }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={closeDialog}
                        aria-label="close"
                        sx={{
                            position: 'absolute',
                            right: 24,
                            top: 12,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <div className={styles.title}>{project.name}</div>
                    <p className="font-t13">Project</p>
                    <div className={styles['project-desc']}>
                        <div className={styles['project-subtitle']}>{project.location}</div>
                        <p><b>Timeline: </b>{project.timeline}</p>
                        {project?.client && <p><b>Client Location: </b>{project?.client}</p>}
                        <p>
                            <b>Tech Stack: </b>
                            <div className={styles["lists-container"]}>
                                <div className={styles["list"]}>
                                    <ul>
                                        {project.skills.map((skill, index) => {
                                            if (index < Math.ceil(project.skills.length / 2)) {
                                                return <li key={index}>{skill}</li>;
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </div>
                                <div className={styles["list"]}>
                                    <ul>
                                        {project.skills.map((skill, index) => {
                                            if (index >= Math.ceil(project.skills.length / 2)) {
                                                return <li key={index}>{skill}</li>;
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </div>
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