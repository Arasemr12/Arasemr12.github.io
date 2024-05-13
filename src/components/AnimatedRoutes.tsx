import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const AnimatedRoutes = () => {
    const location = useLocation();

    return(
        <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </AnimatePresence>
    )
};

export default AnimatedRoutes;
