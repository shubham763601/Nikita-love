import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/EA44F92F-246A-487D-9598-0A09AD9D55A8.jpeg";
import img2 from "../assets/1EA59990-28C0-4B99-A685-5DB6D648F6D2.jpeg";
import img3 from "../assets/FFF86EB0-CA55-4AE2-8A1A-F18F91070AD1.png";
import img4 from "../assets/1B6DF615-FBE8-4EA1-B774-4917B05298ED.png";

export default function Hero(){
  return (
    <section className="hero card">
      <div className="hero-left">
        <span className="hi">To my Nikki 💫</span>
        <motion.h1 className="hero-title"
          initial={{ opacity:0, y: 6 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Every star remembers your name.
        </motion.h1>
        <p className="hero-sub">I wrapped a thousand little memories into one page — your smile, your shy "sona", the way you say "I miss you". This is for you.</p>
        <motion.div
          style={{marginTop:18}}
          initial={{opacity:0, scale: 0.96}}
          animate={{opacity:1, scale:1}}
          transition={{delay:0.3}}
        >
          <div style={{display:"flex", gap:12, alignItems:"center"}}>
            <a className="btn" style={{padding:"10px 16px", borderRadius:12, background:"linear-gradient(90deg,#ff6bb1,#9c69ff)", color:"#fff", fontWeight:700, textDecoration:"none"}} href="#poetry">Read a poem</a>
            <a className="btn" style={{padding:"8px 12px", borderRadius:12, background:"transparent", border:"1px solid rgba(255,255,255,0.06)", color:"rgba(255,255,255,0.9)", textDecoration:"none"}} href="#gallery">Our photos</a>
          </div>
        </motion.div>
      </div>

      <div className="hero-right">
        <div className="collage">
          <img src={img1} alt="m1" className="img-1"/>
          <img src={img2} alt="m2" className="img-2"/>
          <img src={img3} alt="m3" className="img-3"/>
          <img src={img4} alt="m4" className="img-4"/>
        </div>
      </div>
    </section>
  );
}
