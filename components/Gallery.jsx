import React from "react";
import { motion } from "framer-motion";

import a from "../assets/1D597CAA-242E-43B5-8ACC-3A2F93946D54.png";
import b from "../assets/3F79C9C2-9820-44DB-A753-EB44920EE991.png";
import c from "../assets/AA46129D-D9B9-463B-A332-AEEBDC38A9B7.png";
import d from "../assets/CD0BD05F-738F-4653-852C-B689116E1722.jpeg";
import e from "../assets/362BB128-298F-48B7-A39B-644C8AE75FE2.jpeg";
import f from "../assets/7B672561-C196-4EB7-81A4-932E4AB0E6FA.jpeg";

const photos = [a,b,c,d,e,f];

export default function Gallery(){
  return (
    <section id="gallery" style={{marginTop:30}}>
      <h3 style={{marginBottom:12}}>Memories</h3>
      <div className="gallery">
        {photos.map((p, i) => (
          <motion.div key={i} className="photo card"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{opacity:0, y:18}} animate={{opacity:1, y:0}} transition={{delay: 0.08 * i}}
          >
            <img src={p} alt={`mem-${i}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
