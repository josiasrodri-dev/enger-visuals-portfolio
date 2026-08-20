import Header from "./layout/header/Header"
import Footer from "./layout/footer/Footer"
import { useTranslation } from 'react-i18next';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomePage";


function App() {
  const { t } = useTranslation();

  

  return (
    <>
      <Header />

      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
      
    </>
  )
}

export default App
