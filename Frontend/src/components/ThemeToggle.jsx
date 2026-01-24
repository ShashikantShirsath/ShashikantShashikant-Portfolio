import { Moon, Sun } from 'lucide-react';
import React, { use, useState } from 'react'
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useState(() => {
        const savedTheme = localStorage.getItem('theme');
        console.log("Saved Theme: ", savedTheme);
        if(savedTheme === null) {
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(false);
            return;
        }

        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const handleToggle = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }

  return (
    <button onClick={handleToggle} className={cn(
        "fixed top-4 right-5 z-50 p-2 py-1 rounded-full transition-colors duration-300",
        "focus:outline-hidden hover:cursor-pointer",
    )}>
        {isDarkMode ? (
            <Sun className='h-6 w-6 text-yellow-300'/> 
        ): (
            <Moon className='h-6 w-6 text-blue-900'/>
        )}
    </button>
  )
}

export default ThemeToggle
