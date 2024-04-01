import { FunctionComponent } from "react";
import Point from "../../atoms/Point/Point";
import styles from './PointCard.module.scss';
import { PointValue } from "../../../interfaces";
import { motion } from "framer-motion";

interface PointCardProps {
    pointValue: PointValue;
}

const PointCard: FunctionComponent<PointCardProps> = ({ pointValue }) => {
    return (
        <motion.div className={styles['point-div']}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className={styles['point-title']}>
                <Point pointValue={pointValue} />
                <div className={styles['title']}>{pointValue.title}:</div>
            </div>
            <div className={styles.description}>
                {pointValue.description}
            </div>
        </motion.div>
    );
}

export default PointCard;