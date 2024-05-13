import {motion} from "framer-motion";
import { FaGithub, FaInstagram, FaSpotify, FaStar, FaTwitter } from "react-icons/fa";
import SocialLink from "../components/SocialLink";
import { useEffect, useRef, useState } from "react";
import { Spotify } from "../dto/spotify.type";
import { FaCodeFork } from "react-icons/fa6";
import Loading from "../components/Loading";
import { Repository } from "../dto/repository.type";

const Home = () => {
    const [spotify,setSpotify] = useState<Spotify>();

    const [word,setWord] = useState(null);
    const [wordSource,setWordSource] = useState(null);

    const [repos,setRepos] = useState<Array<Repository>>([]);

    const getRepos = async() => {
        let res = await fetch("https://api.github.com/users/arasemr12/repos");
        let json = await res.json();

        setRepos(json);
    };

    const getWord = async() => {        
        setWord(null);

        let res = await fetch("https://ataturk.deno.dev/");
        let json = await res.json();

        setWord(json.quote);
        setWordSource(json.sources[0].source);
    };

    useEffect(() => {
        const get = async() => {
            let res = await fetch("https://api.lanyard.rest/v1/users/441221465019514881");
            let json = await res.json();

            setSpotify(json.data.spotify);
            
            setTimeout(get, 3000);
        };

        get();
        getWord();
        getRepos();

        let c = () => {
            setMaWidth(Number(ma.current?.clientHeight));
            requestAnimationFrame(c);
        };

        c();
    },[]);

    const ma = useRef<HTMLDivElement>(null);

    const [maWidth,setMaWidth] = useState<number>(0);

    return(
        <motion.div
                initial={
                    {
                        x:"-100%",
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
                        x:"-100%",
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
                className="w-full h-full pt-32 overflow-auto px-4 lg:px-0"
        >
            <div className="w-full h-full flex flex-col items-center">
                <div className="lg:w-2/3 w-full h-full flex flex-col items-center gap-5">
                    <div ref={ma} className="flex lg:flex-row flex-col-reverse gap-3 items-center justify-between w-full">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row items-center gap-3">
                                <SocialLink icon={<FaInstagram size={16}/>} href="https://www.instagram.com/arasemr1234"/>
                                <SocialLink icon={<FaTwitter size={16}/>} href="https://twitter.com/arasemr1234"/>
                                <SocialLink icon={<FaGithub size={16}/>} href="https://github.com/arasemr12"/>
                            </div>
                            <span className="text-2xl font-semibold">arasemr1234</span>
                            <span>Self taught web/desktop developer</span>
                            {spotify && (
                                <a href={`https://open.spotify.com/track/${spotify.track_id}`} target="_blank" className="flex flex-row items-center text-green-400 text-xs gap-1">
                                    <FaSpotify size={16}/>
                                    <span>Listening {spotify.song} from {spotify.artist}</span>
                                </a>
                            )}
                        </div>
                        <img src="https://cdn.discordapp.com/embed/avatars/1.png" width={128} height={128} className="rounded-full hover:scale-110 duration-300" draggable={false} alt="" />
                    </div>
                    {/*h-[calc(100%-${ma.current?.clientHeight}px)] */}
                    <div className={`flex lg:flex-row flex-col items-center justify-center gap-5 w-full lg:h-[calc(100%_-_var(--hh))] relative h-full`} style={{
                        //height:`calc(100% - ${maWidth+40}px)`
                        //@ts-ignore
                        '--hh':`${maWidth+40}px`         
                    }}>
                        <span className="glowbg -z-10"></span>
                        <div className={`lg:w-1/2 w-full h-full py-2 px-4 border-2 border-gray-700/50 bg-gray-800/50 rounded-lg flex flex-col items-center gap-3 overflow-auto`}>
                            {repos.length < 1 ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Loading/>
                                </div>
                            ) : (
                                <>
                                    <span className="text-lg font-semibold">My Repositories</span>

                                    {repos.map((i) => (
                                        <a key={i.id} href={i.html_url} target="_blank" className="w-full flex flex-row items-center justify-between bg-gray-700/50 hover:bg-gray-600/50 cursor-pointer duration-300 hover:border-gray-500/50 border-2 border-gray-600/50 py-2 px-4 rounded-lg">
                                            <div className="flex flex-col">
                                                <span>{i.full_name}</span>
                                                <span className="mb-2">Anomz is a free and open source chat software</span>
                                                <div className="flex flex-row items-center gap-3">
                                                    <span className="flex flex-row items-center gap-1">{i.stargazers_count} <FaStar/></span>
                                                    <span className="flex flex-row items-center gap-1">{i.forks} <FaCodeFork/></span>
                                                </div>
                                            </div>
                                            <div>
                                                <FaGithub size={32}/>
                                            </div>
                                        </a>
                                    ))}
                                </>
                            )}
                        </div>
                        <div onClick={getWord} className="lg:w-1/2 w-full h-full px-4 border-2 border-gray-700/50 bg-gray-800/50 rounded-lg flex flex-col overflow-auto" style={{
                            alignItems:"safe center",
                            justifyContent:"safe center"
                        }}>
                            {
                                word ? (
                                    <>
                                        <span className="font-semibold">"{word}"</span>
                                        <span className="">{wordSource}</span>
                                    </>
                                ) : <div className="w-full h-full flex items-center justify-center">
                                    <Loading/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default Home;
