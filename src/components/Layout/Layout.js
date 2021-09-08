import s from './style.module.css'

const Layout = (props)=>{
    return (
        <section className={s.root}>
        <div className={s.wrapper}>
            <article>
                <div className={s.title}>
                    <h3>{props.title}</h3>
                    <span className={s.separator}></span>
                </div>
                <div className={s.desc.full}>
                    <p>{props.descr}</p>
                </div>
            </article>
        </div>
    </section>

    )
}

export default Layout;