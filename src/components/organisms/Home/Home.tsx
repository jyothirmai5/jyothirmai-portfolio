import { FunctionComponent, useCallback, useEffect, useRef } from "react";
import HeadingSection from "../../molecules/HeadingSection/HeadingSection";
import TechStack from "../../molecules/TechStack/TechStack";
import { addRef } from "../../../redux/slices/persistedSlice";
import { useDispatch } from "react-redux";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    const homeRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        saveHomeRef(homeRef)
    }, []);

    const saveHomeRef = useCallback(
        (homeRef: any) => {
            dispatch(addRef({ refName: 'homeRef', refValue: homeRef }))
        },
        [dispatch]
    );

    return (
        <div ref={homeRef}>
            <HeadingSection title="Front-End Design & Developer" subTitle="Hi, I'm Jyothirmai Ch. A passionate Front-end React Developer based in Toronto, Canada" />
            <TechStack />
        </div>
    );
}

export default Home;