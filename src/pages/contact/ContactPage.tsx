import { useTranslation } from 'react-i18next';


function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <h2>{t("contact.title")}</h2>
        
      </main>
    </>
  )
}

export default Contact