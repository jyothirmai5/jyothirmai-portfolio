import { FunctionComponent } from "react";
import styles from './Link.module.scss';

interface LinkProps {
    name: string,
    selected: boolean,
    onClick: any
}

const LinkButton: FunctionComponent<LinkProps> = ({ name, selected, onClick }) => {
    return (
        <a onClick={onClick} className={`${styles['each-link']} ${selected ? styles['selected-link'] : ''}`}>
            {name}
        </a>
    );
}

export default LinkButton;