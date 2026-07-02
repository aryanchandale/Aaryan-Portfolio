import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
const ThemeCtx = createContext<{
  theme: Theme;
  toggle: () => void;
  customCursor: boolean;
  toggleCursor: () => void;
}>({
  theme: "light",
  toggle: () => {},
  customCursor: true,
  toggleCursor: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [customCursor, setCustomCursor] = useState(true);

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
    const prefersDark =
      typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);

    const cursorStored = typeof window !== "undefined" && localStorage.getItem("customCursor");
    setCustomCursor(cursorStored !== "false");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (typeof window !== "undefined") localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("customCursor", String(customCursor));
    document.documentElement.classList.toggle("custom-cursor-off", !customCursor);
  }, [customCursor]);

  return (
    <ThemeCtx.Provider
      value={{
        theme,
        toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")),
        customCursor,
        toggleCursor: () => setCustomCursor((v) => !v),
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
