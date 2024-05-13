import Navbar from "./components/Navbar"
import {BrowserRouter,} from "react-router-dom";
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
