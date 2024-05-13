import React from "react";
const SocialLink = (props:{
    icon:React.JSX.Element,
    href?: string
}) => {    
    return (
        <a href={props.href!} target="_blank" className="text-gray-400 hover:text-white hover:-translate-y-[2px] cursor-pointer duration-300">
            {props.icon}
        </a>
    )
};

export default SocialLink;
