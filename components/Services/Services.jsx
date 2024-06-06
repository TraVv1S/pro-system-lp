import classes from './Services.module.scss'

const Services = () => {
    return (
        <section className={classes.section}>
            <h2>Услуги</h2>
            <div className={classes.serviceItem}>
                <div className={classes.imageWrapper}>
                    <img src="/images/service1.png" alt="Заправка картриджей" />
                </div>
                <div className={classes.content}> 
                    <h3>Заправка и восстановление картриджей</h3>
                    <p>Описание услуги...</p>
                    <button className={classes.secondaryButton}>Оставить заявку</button>
                </div>
                
            </div>
            <div className={classes.serviceItem}>
                <div className={classes.imageWrapper}>
                    <img src="/images/service2.png" alt="Поставка картриджей" />
                </div>
                <div className={classes.content}>
                    <h3>Поставка картриджей</h3>
                    <p>Описание услуги...</p>
                    <button className={classes.secondaryButton}>Оставить заявку</button>
                </div>
                
            </div>
            <div className={classes.serviceItem}>
                <div className={classes.imageWrapper}>
                    <img src="/images/service3.png" alt="Поставка оборудования" />
                </div>
                <div className={classes.content}>
                    <h3>Поставка печатного оборудования</h3>
                    <p>Описание услуги...</p>
                    <button className={classes.secondaryButton}>Оставить заявку</button>
                </div>
                
            </div>
            <div className={classes.serviceItem}>
                <div className={classes.imageWrapper}>
                    <img src="/images/service4.png" alt="Ремонт принтеров" />
                </div>
                <div className={classes.content}>
                    <h3>Ремонт принтеров</h3>
                    <p>Описание услуги...</p>
                    <button className={classes.secondaryButton}>Оставить заявку</button>
                </div>
                
            </div>
            <div className={classes.serviceItem}>
                <div className={classes.imageWrapper}>
                    <img src="/images/service5.png" alt="Сервисное обслуживание" />
                </div>
                <div className={classes.content}>
                    <h3>Сервисное обслуживание</h3>
                    <p>Описание услуги...</p>
                    <button className={classes.secondaryButton}>Оставить заявку</button>
                </div>
                
            </div>
        </section>
    )
}

export default Services;