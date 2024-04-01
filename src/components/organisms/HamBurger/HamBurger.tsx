import { FunctionComponent, useState } from "react";
import styles from './HanBurger.module.scss';
import { useMediaQuery } from "react-responsive";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";

interface HamBurgerProps {
    scrollToSection: (elementRef: any, tab: string) => void;
    homeRef: any;
    projectsRef: any;
    aboutRef: any;
    contactRef: any;
}

const HamBurger: FunctionComponent<HamBurgerProps> = ({ scrollToSection, homeRef, projectsRef, aboutRef, contactRef }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const currentTab = useSelector(
        (state: any) => state?.persistedSlice?.currentTab
    )

    const onNavigate = (tab: string) => {
        switch (tab) {
            case 'Home': scrollToSection(homeRef, 'home');
                break;
            case 'About': scrollToSection(aboutRef, 'about');
                break;
            case 'Projects': scrollToSection(projectsRef, 'projects');
                break;
            case 'Contact': scrollToSection(contactRef, 'contact');
                break;
            default:
                break;
        }
    }

    const DrawerList = (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Home', 'About', 'Projects', 'Contact'].map((text, index) => (
                    <nav>
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => onNavigate(text)}>
                                <ListItemText className={`${styles['each-link']} ${currentTab === text.toLowerCase() ? styles['selected-link'] : ''}`} key={index} primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </nav>
                ))}
            </List>
        </Box>
    );

    return (
        isMobile &&
        <div>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon className={styles['icon-color']} />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}
                PaperProps={{
                    style: {
                        backgroundColor: '#000000'
                    }
                }}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default HamBurger;