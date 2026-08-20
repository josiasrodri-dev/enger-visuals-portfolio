import { useTranslation } from 'react-i18next';


function About() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <h2>{t("about.title")}</h2>
        
      </main>
    </>
  )
}

export default About