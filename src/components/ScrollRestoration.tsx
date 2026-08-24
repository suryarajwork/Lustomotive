"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Tell the browser not to attempt its own scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const key = `scrollPosition-${pathname}`;
    const savedScrollY = sessionStorage.getItem(key);

    if (savedScrollY && isInitialMount.current) {
      // Multiple attempts to scroll to handle dynamic rendering, images loading, and Framer Motion layout changes
      const scrollToPosition = () => {
        window.scrollTo({
          top: parseInt(savedScrollY, 10),
          behavior: "instant"
        });
      };
      
      scrollToPosition();
      setTimeout(scrollToPosition, 100);
      setTimeout(scrollToPosition, 300);
      setTimeout(scrollToPosition, 800);
      
      isInitialMount.current = false;
    }

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        sessionStorage.setItem(key, window.scrollY.toString());
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [pathname]);

  return null;
}
