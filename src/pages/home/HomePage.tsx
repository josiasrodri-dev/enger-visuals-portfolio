import style from "./HomePage.module.css";
import { useTranslation } from 'react-i18next';
import { images } from "../../assets/images";


function Home() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <div className = {style.hero}>
            <div className="title">
                <h1 className="">{t("home.title")}</h1>
                <h3>{t("home.subtitle")}</h3>
                <p className=''>{t("home.desc")}</p>
            </div>
            <div className={style.cta_container}>
                <a href="/projects">{t("home.projects")}</a>
                <a href="/contact">{t("home.contact")}</a>
            </div>
        </div>

        <div className={style.work}>
          <h2>{t("home.selected-work")}</h2>
          <h3>{t("home.selected-desc")}</h3>
          <div className={style.images}>
            <img src={images.wedding_1} alt=""/>
            <img src={images.wedding_2} alt="" />
          </div>

          <div className={style.cta}>
            <a href=""> {t("home.view-all")} </a>
          </div>
        </div>

        <div className={style.gallery}>
          <h2>{t("home.gallery")}</h2>
          <div className={style.row}>
            <img src={images.flower_1} alt="" />
            <img src={images.flower_2} alt="" />
          </div>
          <img src={images.forest_2} alt="" />
          <div className={style.row}>
            <img src={images.beach_1} alt="" />
            <img src={images.beach_2} alt="" />
          </div>
        </div>

        <div className={style.about_me}>
          <h2>{t("home.about-title")}</h2>
          <div>
            <img src={images.photographer} alt="" />
            <div>
              <p>{t("home.about-desc")}</p>
              <a href="/about">{t("home.about-cta")}</a>
            </div>
          </div>
        </div>

        <div className={style.contact}>
          <h2>{t("home.contact-title")}</h2>
          <h4>{t("home.contact-desc")}</h4>
          <div className={style.row}>
            <a href="/contact">{t("home.contact")}</a>
            <a href="">WhatsApp</a>
          </div>
        </div>
        
      </main>
    </>
  )
}

export default Home