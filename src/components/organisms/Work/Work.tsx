import { FunctionComponent, useCallback, useEffect, useRef } from "react";
import styles from './Work.module.scss';
import { projects } from "../../../constants/dataConstants";
import ProjectCard from "../../molecules/ProjectCard/ProjectCard";
import { useDispatch } from "react-redux";
import { addRef } from "../../../redux/slices/persistedSlice";

interface WorkProps {

}

const Work: FunctionComponent<WorkProps> = () => {
    const projectsRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        saveProjectsRef(projectsRef)
    }, []);

    const saveProjectsRef = useCallback(
        (projectsRef: any) => {
            dispatch(addRef({ refName: 'projectsRef', refValue: projectsRef }))
        },
        [dispatch]
    );

    return (
        <div ref={projectsRef}>
            <div className={styles['spacing-block-large']}></div>
            <h2 className={styles['text-style-label']}>Recent Works</h2>
            <div id="project-list" className={styles['projects-list']}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;