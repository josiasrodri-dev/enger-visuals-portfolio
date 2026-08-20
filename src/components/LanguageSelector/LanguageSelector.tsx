import style from "./LanguageSelector.module.css"
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function LanguageSelector(){
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <div className={style.languages}>
                <button 
                className={style.languageButton}
                type="button"
                onClick={() => {
                    setIsOpen((previous => !previous))
                }}
                >
                    <i className={`${style.icon} ${style.dr_icon}`}></i>
                     ES </button>
                {isOpen && (
                    <div className= {style.container_options}>
                        <button 
                            onClick={() => {
                                i18n.changeLanguage("en");
                                setIsOpen((previous => !previous))
                            }}
                        > 
                        <i className={`${style.icon} ${style.usa_icon}`}></i> EN
                        </button>
                        <button 
                            onClick={() => {
                                i18n.changeLanguage("es");
                                setIsOpen((previous => !previous))
                            }}
                        > 
                        <i className={`${style.icon} ${style.dr_icon}`}></i> ES
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default LanguageSelector; 