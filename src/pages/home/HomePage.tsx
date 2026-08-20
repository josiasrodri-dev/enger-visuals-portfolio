import { useTranslation } from 'react-i18next';


function Home() {
  const { t } = useTranslation();

  

  return (
    <>
      <main>
        <h2>{t("test")}</h2>
        
      </main>
    </>
  )
}

export default Home