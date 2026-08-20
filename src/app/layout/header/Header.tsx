import LanguageSelector from "../../../components/LanguageSelector/LanguageSelector";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";
import style from "./Header.module.css";
import logo from "../../../assets/images/logo.svg";
import { useState, useRef, useEffect } from "react";

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent){
            if(
                isOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ){
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen]);

    return (
        <>
        <header className = {style.header} >
            <img src={logo} alt="" width="100vw"/>

            <i className={"fa-solid fa-bars " + style.mobile_toggle_btn} onClick={() => { setIsOpen(!isOpen) }}></i>

            <div ref={sidebarRef} className={`${isOpen ? style.navbar + " " +style.navbarOpen :  style.navbar}`}>
                <div className={style.links}>
                    <a href="">HOME</a>
                    <a href="">ABOUT ME</a>
                    <a href="">MY WORK</a>
                    <a href="">CONTACT</a>
                </div>

                <div className={style.user_preferences}>
                    <ThemeToggle />
                    <LanguageSelector />
                </div>
            </div>
            
        </header>
        </>
    )
}
export default Header;