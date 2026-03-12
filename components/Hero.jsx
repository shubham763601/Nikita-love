import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/236D25F6-ADEB-4DCB-9652-1F690A45B227.png";
import img2 from "../assets/4E71CD17-7744-4647-BC58-F2CB562CEF0D.png";
import img3 from "../assets/8C318060-AB2D-4FB3-BDBC-076BEEB0FB33.png";
import img4 from "../assets/941FD73C-BD49-4E10-B329-95BFF2F31804.png";

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
