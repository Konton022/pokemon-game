import s from "./style.module.css";

const Layout = ({ title, descr, urlBg, colorBg, children }) => {
  const back = urlBg
    ? { backgroundImage: `url(${urlBg})` }
    : { backgroundColor: `${colorBg}` };

  return (
    <section style={back} className={s.root}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
