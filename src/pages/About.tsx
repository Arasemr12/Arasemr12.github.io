import {motion} from "framer-motion";
import { useState } from "react";

const About = () => {
    const [mail] = useState("arasemr1234@protonmail.com");

    const copyMail = () => {
        navigator.clipboard.writeText(mail);
    };

    return(
        <motion.div
                initial={
                    {
                        x:"100%",
                        opacity:"0",
                    }
                }
                animate={
                    {
                        x:"0",
                        opacity:"100%"
                    }
                }
                exit={
                    {
                        x:"100%",
                        opacity:"0",
                        transition:{
                            duration:0.1,                        
                        }
                    }
                }
                transition={{
                    x:{
                        type:"spring",
                        bounce:0
                    }
                }}
                className="w-full h-full overflow-auto pt-32"
        >
            <div className="w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="lg:w-2/3 lg:h-2/3 w-auto h-auto bg-gray-800/50 border-2 border-gray-700/50 py-2 px-4 rounded-lg flex flex-col gap-3">
                        <span>Hello, I am Emrah, I am interested in software, research and politics. I started coding when I was about 10 years old and now I am 16 years old. I am studying at Anatolian high school. My main field is web development, I am also interested in desktop and OS development. I try to improve myself and create good work every day.</span>
                        <div className="flex flex-row items-center gap-1">
                            <span>Contact:</span>
                            <span className="cursor-pointer" onClick={copyMail}>{mail}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default About;
