import React, { useEffect } from "react";

/*
 simple falling rose particles
 each particle uses an inline SVG (rose-like heart) styled and animated by CSS
*/
export default function Roses() {
  useEffect(() => {
    const root = document.createElement("div");
    root.className = "roses";

    const count = 18; // number of falling pieces
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      const size = 24 + Math.random() * 36;
      el.style.position = "absolute";
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${-Math.random() * 30}vh`;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.opacity = 0;
      el.style.transform = `translateY(-10vh) rotate(${Math.random() * 360}deg)`;
      el.style.pointerEvents = "none";
      el.style.zIndex = 1;
      el.style.animation = `fall ${8 + Math.random() * 8}s linear ${Math.random() * 5}s infinite`;
      // svg rose (heart-shaped rose)
      el.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="${getComputedStyle(document.documentElement).getPropertyValue('--rose') || '#ff6bb1'}"
         d="M12 21s-6.716-4.93-9.1-7.59C-0.06 9 4.4 4.6 8.6 7.09 10.3 8.07 12 9.5 12 9.5s1.7-1.43 3.4-2.41C19.6 4.6 24.06 9 21.1 13.41 18.716 16.07 12 21 12 21z"/>
      </svg>`;
      root.appendChild(el);
    }

    document.body.appendChild(root);
    return () => {
      document.body.removeChild(root);
    };
  }, []);

  return null;
}
