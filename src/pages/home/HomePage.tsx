import style from "./HomePage.module.css";
import { useTranslation } from 'react-i18next';


function Home() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <div className = {style.hero}>
            <div className="title">
                <h1 className="">{t("home.title")}</h1>
                <p className=''>{t("home.desc")}</p>
            </div>
            <div className={style.cta_container}>
                <a href="/projects">{t("home.projects")}</a>
                <a href="/contact">{t("home.contact")}</a>
            </div>
        </div>
        
      </main>
    </>
  )
}

export default Home