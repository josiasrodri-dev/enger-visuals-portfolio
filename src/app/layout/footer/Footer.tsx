import style from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <span>Enger Visuals © {year}</span>

      <div className={style.social_links}>
        <a href=""><i className="fa-brands fa-square-instagram"></i></a>
        <a href=""><i className="fa-brands fa-linkedin"></i></a>
        <a href=""><i className="fa-solid fa-envelope"></i></a>
      </div>
    </footer>
  )
}

export default Footer