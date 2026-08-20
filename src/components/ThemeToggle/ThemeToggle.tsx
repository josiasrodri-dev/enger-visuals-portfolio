import { useState, useEffect } from "react"
import style from "./ThemeToggle.module.css"

function ThemeToggle(){
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    return(
        <>
            <button
                className={`${style.themeButton} ${
                    theme === 'light' ? style.darkButton : style.lightButton
                }`}
                onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light');
                    
                }}
            >
                <i className={theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i> 
                {theme === 'light' ? "Darkmode" :  "Lightmode"}
            </button>
        </>
    )
}

export default ThemeToggle