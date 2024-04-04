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
                        maxWidth: 'lg',
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
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={closeDialog}
                        aria-label="close"
                        sx={{
                            position: 'absolute',
                            right: '4%'
                        }}
                    >
                        <CloseIcon fontSize={isMobile ? 'small' : 'medium'} />
                    </IconButton>
                    <div className={styles['dialog-heading-div']}>
                        <div className={styles.project}><div className={styles['project-title']}>{project.name}
                        </div>
                            <p className={styles['project-subtext']}>Project</p>
                        </div>
                    </div>
                    <div className={styles['project-desc']}>
                        <div>
                            <img className={styles['img-container']} src={project.imageUrl}></img>
                            <div className={styles['table-container']}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><b>Associated with</b></td>
                                            <td>{project.location}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Timeline</b></td>
                                            <td>{project.timeline}</td>
                                        </tr>
                                        {project?.client &&
                                            <tr>
                                                <td><b>Client Location</b></td>
                                                <td>{project.client}</td>
                                            </tr>
                                        }
                                        {project?.website &&
                                            <tr>
                                                <td><b>Website</b></td>
                                                <td><a className={styles['website']} target="_blank" href={project.website}>{project.website}</a></td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <b style={{ fontSize: '1.5rem' }}>Description</b>
                            <p>{project.description}</p>
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
                        </div>
                    </div>
                </motion.div>
            </Dialog>
        </AnimatePresence >);
}

export default DialogCompo;