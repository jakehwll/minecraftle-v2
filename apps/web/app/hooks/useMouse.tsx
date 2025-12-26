import { useEffect, useRef, useState } from "react";

const useMouse = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const rafRef = useRef<number | null>(null);
    const pendingPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            pendingPosition.current = { x: e.clientX, y: e.clientY };
            
            if (rafRef.current === null) {
                rafRef.current = requestAnimationFrame(() => {
                    setMouse(pendingPosition.current);
                    rafRef.current = null;
                });
            }
        };

        window.addEventListener("mousemove", updateMouse, { passive: true });
        return () => {
            window.removeEventListener("mousemove", updateMouse);
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return mouse;
}

export default useMouse;