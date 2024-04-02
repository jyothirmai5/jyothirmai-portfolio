import { FunctionComponent } from "react";
import styles from './TechStack.module.scss';
import { Fade, Tooltip } from "@mui/material";

interface TechStackProps {

}

const TechStack: FunctionComponent<TechStackProps> = () => {
    return (
        <div className={styles['tech-stack-div']}>
            <p className="font-primary-color">Tech Stack</p>
            <ul className={styles.skills}>
                <Tooltip sx={{ fontSize: '1rem' }} title="HTML, CSS, SCSS" TransitionComponent={Fade} placement="top"
                    TransitionProps={{ timeout: 600 }} arrow>
                    <li>
                        <img src="https://skillicons.dev/icons?i=html,css,scss"></img>
                    </li>
                </Tooltip>
                <Tooltip title="JavaScript, TypeScript" TransitionComponent={Fade} placement="top"
                    TransitionProps={{ timeout: 600 }} arrow>
                    <li>
                        <img src="https://skillicons.dev/icons?i=js,ts"></img>
                    </li>
                </Tooltip>
                <Tooltip title="React, Angular" TransitionComponent={Fade} placement="top"
                    TransitionProps={{ timeout: 600 }} arrow>
                    <li>
                        <img src="https://skillicons.dev/icons?i=react,angular"></img>
                    </li>
                </Tooltip>
                <Tooltip title="Figma, XD, Illustrator, Photoshop" TransitionComponent={Fade} placement="top"
                    TransitionProps={{ timeout: 600 }} arrow>
                    <li>
                        <img src="https://skillicons.dev/icons?i=figma,xd,illustrator,photoshop"></img>
                    </li>
                </Tooltip>
            </ul>
        </div>
    );
}

export default TechStack;