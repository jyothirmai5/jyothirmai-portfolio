import { FunctionComponent, useCallback } from "react";
import styles from './Header.module.scss'
import { AppBar, Toolbar, Typography } from "@mui/material";
import LinkButton from "../../atoms/Link/Link";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import HamBurger from "../HamBurger/HamBurger";
import { changeTab } from "../../../redux/slices/persistedSlice";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    const homeRef = useSelector(
        (state: any) => state?.persistedSlice?.homeRef
    )
    const aboutRef = useSelector(
        (state: any) => state?.persistedSlice?.aboutRef
    )
    const projectsRef = useSelector(
        (state: any) => state?.persistedSlice?.projectsRef
    )
    const contactRef = useSelector(
        (state: any) => state?.persistedSlice?.contactRef
    )
    const currentTab = useSelector(
        (state: any) => state?.persistedSlice?.currentTab
    )
    const dispatch = useDispatch();

    const scrollToSection = (elementRef: any, tab: string) => {
        changeTabReducer(tab);
        window.scrollTo({
            top: elementRef?.current?.offsetTop,
            behavior: "smooth",
        });
    };

    const changeTabReducer = useCallback(
        (tab: string): any => {
            dispatch(changeTab(tab));
        },
        [dispatch]
    );

    const isDesktopOrTablet = useMediaQuery({
        query: '(min-width: 769px)'
    })

    return (
        <div className={styles['header-root']}>
            {isDesktopOrTablet && <div className={styles['home-header-gradient']}></div>}
            <AppBar position="static" className={styles['app-bar']}>
                <Toolbar className={styles['header-toolbar']}>
                    {/* Add logo */}
                    <Typography variant="h6" sx={{ fontWeight: 700, textDecoration: 'none', color: 'inherit', flexGrow: 1, padding: 'auto' }}>
                        Jyothirmai.dev
                    </Typography>
                    {isDesktopOrTablet ?
                        <nav>
                            <LinkButton onClick={() => scrollToSection(homeRef, 'home')} name="Home" selected={currentTab === 'home'} />
                            <LinkButton onClick={() => scrollToSection(aboutRef, 'about')} name="About" selected={currentTab === 'about'} />
                            <LinkButton onClick={() => scrollToSection(projectsRef, 'projects')} name="Projects" selected={currentTab === 'projects'} />
                            <LinkButton onClick={() => scrollToSection(contactRef, 'contact')} name="Contact" selected={currentTab === 'contact'} />
                        </nav> :
                        <HamBurger scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
                    }
                </Toolbar>
            </AppBar>
            <div className={styles['home-header-right-gradient']}></div>
        </div >
    );
}

export default Header;
