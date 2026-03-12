import {motion} from "framer-motion"

export default function Home(){

return(

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:2}}
>

<h1>For Nikita ❤️</h1>

<p>

कभी सोचा नहीं था  
कि किसी की आँखें इतनी खूबसूरत हो सकती हैं  
कि पूरी दुनिया ही बदल जाए।

</p>

<button>Start Our Story</button>

</motion.div>

)

}
