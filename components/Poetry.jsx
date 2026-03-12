import React from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "Tumhari muskaan se meri subah hoti hai — every sunrise calls your name.", lang: "both" },
  { text: "Main tumhe milne ki wajah dhundta hoon — in crowds, in songs, in quiet rooms.", lang: "both" },
  { text: "I carry your soft 'sona' inside my pocket — and take it out on lonely evenings.", lang: "en" },
  { text: "Bas itna hi kehna tha — tum hi mera ghar ho.", lang: "hi" }
];

export default function Poetry(){
  return (
    <section id="poetry" className="poetry">
      <motion.div className="poem-card card"
        initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.9}}
      >
        <h3 style={{margin:0, fontSize:18, color:"rgba(255,255,255,0.9)"}}>A small poem for you</h3>
        <div style={{marginTop:18}}>
          {lines.map((l,i)=>(
            <motion.div
              key={i}
              className="poem-line"
              initial={{opacity:0, x:-20}}
              whileInView={{opacity:1, x:0}}
              viewport={{once:true}}
              transition={{delay: i * 0.12, duration:0.6}}
            >{l.text}</motion.div>
          ))}
        </div>
        <p className="poem-small" style={{marginTop:18}}>Tip: edit these lines in <em>src/components/Poetry.jsx</em> — add your own nicknames and inside jokes.</p>
      </motion.div>

      <motion.aside className="card" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.9}}>
        <h4 style={{marginTop:0}}>Little details I love</h4>
        <ul style={{paddingLeft:18}}>
          <li>How you say "Sona" 😌</li>
          <li>Your soft eyes — I get lost in them</li>
          <li>Those messages — "Sona I really miss you" — they stay with me</li>
        </ul>
      </motion.aside>
    </section>
  );
}
