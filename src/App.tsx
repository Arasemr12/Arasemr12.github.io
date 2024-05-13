import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <div className="w-full h-full" onContextMenu={(e) => e.preventDefault()}>
      <BrowserRouter>
        <Navbar/>
        <AnimatedRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
