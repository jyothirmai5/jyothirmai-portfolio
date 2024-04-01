import { useCycle, motion } from "framer-motion";
import { FunctionComponent, useRef } from "react";
import { useDimensions } from "../../../constants/use-dimensions";
import { Navigation } from "../Navigation";
import { MenuToggle } from "../MenuToggle";

interface SidebarProps {

}
const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
const Sidebar: FunctionComponent<SidebarProps> = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
}

export default Sidebar;