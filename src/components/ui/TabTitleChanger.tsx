"use client";

import { useEffect, useRef } from "react";

export default function TabTitleChanger() {
    const originalTitle = useRef<string | null>(null);

    useEffect(() => {
        // Capture the title after a short delay to ensure Next.js metadata has loaded
        const timeoutId = setTimeout(() => {
            if (!originalTitle.current) {
                originalTitle.current = document.title;
            }
        }, 500);

        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Only save the original title if we are hiding, and we haven't already saved it
                if (!originalTitle.current || document.title !== "Your vehicle deserves the best. Book your slot today with our experts!") {
                    originalTitle.current = document.title;
                }
                document.title = "Your vehicle deserves the best. Book your slot today with our experts!";
            } else {
                if (originalTitle.current) {
                    document.title = originalTitle.current;
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return null;
}
