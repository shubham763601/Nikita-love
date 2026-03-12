import React, { useEffect } from "react";

export default function Stars() {
  useEffect(() => {
    const el = document.createElement("div");
    el.className = "stars";
    // create ~80 small stars
    for (let i = 0; i < 80; i++) {
      const s = document.createElement("div");
      s.style.position = "absolute";
      s.style.width = `${Math.random() * 2 + 0.6}px`;
      s.style.height = s.style.width;
      s.style.borderRadius = "50%";
      s.style.background = `rgba(255,255,255,${Math.random() * 0.9})`;
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.filter = "blur(0.6px)";
      s.style.transform = `translateZ(0)`;
      s.style.opacity = 0.8;
      s.style.animation = `starTwinkle ${2 + Math.random() * 4}s ease-in-out ${Math.random()}s infinite`;
      el.appendChild(s);
    }
    document.body.appendChild(el);

    // star twinkle keyframe injection
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes starTwinkle {
        0% {opacity:0.2}
        50% {opacity:1}
        100% {opacity:0.2}
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(el);
      document.head.removeChild(style);
    };
  }, []);
  return null;
}
