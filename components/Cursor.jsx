import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    document.body.style.cursor = "none";
    function move(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div style={{
      position: "fixed",
      left: pos.x,
      top: pos.y,
      transform: "translate(-50%,-50%)",
      pointerEvents: "none",
      zIndex: 9999,
    }}>
      <div style={{
        width: 34,
        height: 34,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        background: "linear-gradient(135deg,#ff9ac4,#ffde92)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        transform: "translateY(-2px)",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 21s-6.716-4.93-9.1-7.59C-0.06 9 4.4 4.6 8.6 7.09 10.3 8.07 12 9.5 12 9.5s1.7-1.43 3.4-2.41C19.6 4.6 24.06 9 21.1 13.41 18.716 16.07 12 21 12 21z" fill="#fff"/>
        </svg>
      </div>
    </div>
  );
}
