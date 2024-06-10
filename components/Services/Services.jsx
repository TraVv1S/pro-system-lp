import Image from 'next/image';
import classes from './Services.module.scss'

const Services = () => {
    return (
        <section className={classes.section} id="products">
            <h2>Услуги</h2>
            {[0,1,2,3,4,5].map((s,i) => (
                    <div className={classes.serviceItem}>
                    <div className={classes.imageWrapper}>
                        <Image src="/images/service1.png" alt="Заправка картриджей" fill/>
                    </div>
                    
                    <div className={classes.content}> 
                        <h3>Заправка и восстановление картриджей</h3>
                        <div className={classes.text}>
                            <ul>
                                <li>очищение картриджа от остатков старого тонера и отработки;</li>
                                <li>количество тонера должно соответствовать ресурсу данной модели картриджа;</li>
                                <li>правильная сборка картриджа после заправки и ремонта;</li>
                                <li>замена фотобарабана производится только с попутной заменой ракеля;</li>
                                <li>ремонт пластиковых частей картриджей производится по технологии термического восстановления пластмассы с использованием армирующих включений;</li>
                                <li>замена управляющего чипа на картридже.</li>
                            </ul>
                        </div>
                        <button className={classes.secondaryButton}>Оставить заявку</button>
                    </div>
                    
                </div>
                )) }
            
            
        </section>
    )
}

export default Services;