import Header from "./layout/header/Header"
import Footer from "./layout/footer/Footer"
import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation();

  

  return (
    <>
      <Header />

      <main>
        <h2>{t("test")}</h2>
        
      </main>

      <Footer />
      
    </>
  )
}

export default App
