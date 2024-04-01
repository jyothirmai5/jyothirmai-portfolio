import { FunctionComponent } from "react";
import Footer from "../organisms/Footer/Footer";
import Header from "../organisms/Header/Header";
import styles from './Layout.module.scss';

export interface ChildrenProps {
    children: React.ReactNode
}

const Layout: FunctionComponent<ChildrenProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.layout}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;