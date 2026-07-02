import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export function CustomCursor() {
  const { customCursor } = useTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [role=button]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!visible || !customCursor) return null;
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground md:block"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border border-foreground/40 transition-[width,height,opacity] duration-200 ease-out md:block"
        style={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
          transitionProperty: "width,height,transform,opacity",
          transitionDuration: "200ms,200ms,80ms,200ms",
        }}
      />
    </>
  );
}

