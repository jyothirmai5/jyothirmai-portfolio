import { FunctionComponent, useCallback, useEffect, useRef } from "react";
import { aboutMe } from "../../../constants/dataConstants";
import PointCard from "../../molecules/PointCard/PointCard";
import styles from './About.module.scss';
import { useDispatch } from "react-redux";
import { addRef } from "../../../redux/slices/persistedSlice";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    const aboutRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        saveAboutRef(aboutRef)
    }, []);

    const saveAboutRef = useCallback(
        (aboutRef: any) => {
            dispatch(addRef({ refName: 'aboutRef', refValue: aboutRef }))
        },
        [dispatch]
    );

    return (
        <div ref={aboutRef}>
            <h2 className={styles['text-style-label']}>Soft Skills</h2>
            <div className={styles['home-about_info-wrapper']}>
                <div className={styles['home-about_line-wrapper']}>
                    <div className={styles['home-about_line-blue']}>
                        <div className={styles['home-about_light']}></div>
                    </div>
                </div>
                <div id="about" className={styles['about-list-wrapper']}>
                    {aboutMe.map((eachPoint, index) => (
                        <div key={index}>
                            <PointCard pointValue={eachPoint} />
                        </div>
                    ))}
                </div>
            </div >
        </div>
    );
}

export default About;