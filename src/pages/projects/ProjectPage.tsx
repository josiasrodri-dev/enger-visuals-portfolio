import { useTranslation } from 'react-i18next';


function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <h2>{t("projects.title")}</h2>
        
      </main>
    </>
  )
}

export default Projects