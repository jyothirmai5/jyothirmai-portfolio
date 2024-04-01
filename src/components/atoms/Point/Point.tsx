import { FunctionComponent } from "react";
import styles from './Point.module.scss';
import { PointValue } from "../../../interfaces";

interface PointProps {
    pointValue: PointValue;
}

const Point: FunctionComponent<PointProps> = ({ pointValue }) => {
    return (
        <img className={styles['each-icon']} src={pointValue.imageUrl}></img>
    );
}

export default Point;