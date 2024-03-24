import { useEffect, useRef, MutableRefObject } from "react";

const MIN_NAV_SIZE: number = 220;
const MAX_NAV_SIZE: number = 480;

import styles from "./ Navbar.module.css";

export default function NavBarResizer({
  nav,
}: {
  nav: MutableRefObject<HTMLElement | null>;
}) {
  const resizerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const resize = (e: MouseEvent) => {
      e.preventDefault();

      if (nav.current) {
        const elem = nav.current;
        const newWidth = e.pageX - elem.getBoundingClientRect().left;
        if (newWidth >= MIN_NAV_SIZE && newWidth <= MAX_NAV_SIZE) {
          elem.style.width = newWidth + "px";
        }
      }
    };

    const addResize = (e: MouseEvent) => {
      e.preventDefault();
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResize);
    };

    const stopResize = (e: MouseEvent) => {
      window.removeEventListener("mousemove", resize);
    };

    const resizer = resizerRef.current;

    if (resizer) {
      resizer.addEventListener("mousedown", addResize);
    }

    return () => {
      if (resizer) {
        resizer.removeEventListener("mousedown", addResize);
        window.removeEventListener("mouseup", stopResize);
      }
    };
  }, [nav]);
  return <div ref={resizerRef} className={styles.resizer}></div>;
}
