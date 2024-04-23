import { FunctionComponent } from "react";
import Home from "../organisms/Home/Home";
import About from "../organisms/About/About";
import Layout from "../templates/Layout";
import Work from "../organisms/Work/Work";
import Contact from "../organisms/Contact/Contact";

interface MainPageProps {

}

const MainPage: FunctionComponent<MainPageProps> = () => {
    return (
        <Layout>
            <Home />
            <Work />
            <About />
            <Contact />
        </Layout>
    );
}

export default MainPage;