import React, { useEffect } from "react";

export default function AnimationsOnLoad() {
  // useEffect(() => {
  //   const handlePageReload = () => {
  //     const element = document.getElementById('pong');
  //     if (element) {
  //       element.style.transform = 'translate(2000px, 0px)';
  //     }
  //   };
  //
  //   window.addEventListener('beforeunload', handlePageReload);
  //
  //   return () => {
  //     window.removeEventListener('beforeunload', handlePageReload);
  //   };
  // }, []);

  return (
    <div>
      <img
        src="pong.png"
        alt="Pong"
        className="h-[500px] animated-element"
        id="pong"
      />
    </div>
  );
}
