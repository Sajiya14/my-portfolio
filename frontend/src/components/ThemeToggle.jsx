import React from 'react'

import { Sun, Moon } from "lucide-react";
import useDarkMode from "./useDarkMode";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-white/10 backdrop-blur-md border 
               border-black/20 dark:border-black/10 transition-all 
                 hover:scale-110 active:scale-95 cursor-pointer"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}
