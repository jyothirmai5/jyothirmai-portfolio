import { FunctionComponent } from "react";
import styles from './TechStack.module.scss';

interface TechStackProps {

}

const TechStack: FunctionComponent<TechStackProps> = () => {
    return (
        <div className={styles['tech-stack-div']}>
            <p className="font-primary-color">Tech Stack</p>
            <ul className={styles.skills}>
                <li>
                    <img src="https://skillicons.dev/icons?i=html,css,scss"></img>
                </li>
                <li>
                    <img src="https://skillicons.dev/icons?i=js,ts"></img>
                </li>
                <li>
                    <img src="https://skillicons.dev/icons?i=react,angular,nextjs"></img>
                </li>
                <li>
                    <img src="https://skillicons.dev/icons?i=figma,xd,photoshop,aftereffects"></img>
                </li>
            </ul>
        </div>
    );
}

export default TechStack;