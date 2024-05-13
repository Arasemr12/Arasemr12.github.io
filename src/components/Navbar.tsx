import { useLocation, useNavigate } from "react-router-dom";
import {motion} from "framer-motion";

const Item = (props:{active?:boolean,path:string,text:string}) => {
    const navigate = useNavigate();

    return(
        <a onClick={() => navigate(props.path)} className={`py-1 px-4 bg-gray-700 hover:bg-gray-600 rounded-full duration-300 cursor-pointer ${props.active && 'bg-indigo-600 hover:bg-indigo-500'}`}>{props.text}</a>
    )
};

const Navbar = () => {
    const links = [
        {
            text:"Home",
            path:"/"
        },
        {
            text:"About",
            path:"/about"
        }
    ];

    const location = useLocation();

    /*const navbar = useRef<HTMLDivElement>(null);

    const d = (e:PointerEvent) => {
        //@ts-ignore
        //if(document.body.clientWidth-(e.clientX+navbar.current?.clientWidth!/2) < -10) return e.clientX = document.body.clientWidth;
        let style = window.getComputedStyle(navbar.current!);
        let matrix = new WebKitCSSMatrix(style.transform);
    };*/

    return(
        <motion.div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gray-800/50 border-2 border-gray-700/50 backdrop-blur-sm py-2 px-4 rounded-full flex flex-row items-center gap-3">
            {/*ref={navbar} drag onDrag={d} */}
            {links.map((i) => (
                <Item key={i.path} text={i.text} path={i.path} active={location.pathname == i.path}/>
            ))}
        </motion.div>
    )
};

export default Navbar;
