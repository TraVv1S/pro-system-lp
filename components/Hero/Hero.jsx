import Image from 'next/image';
import styles from './Hero.module.scss'
import Header from '../Header/Header';

const Hero = () => {
    return (
        <div className={styles.block}>
            <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.cta}>
                    <h1 className={styles.heading}>Комплексное обслуживание IT-инфраструктуры вашего бизнеса</h1>
                    <button className={styles.button}>Оставить заявку</button>
                </div> 
                
                
                <div className={styles.services}>
                    <div className={styles.service}>
                        <div className={styles.service_front}>
                            <div className={styles.service_icon}><Image src="/images/printer.svg" width={60} height={60} alt="printer" /></div>
                            <div> Печатная техника</div>
                        </div>
                        <div className={styles.service_reverse}>
                            <div>Поставка печатного оборудования любого класса</div>
                            <button className={styles.button}>Подробнее</button>
                        </div>
                    </div>
                    <div className={styles.service}>
                    <div className={styles.service_icon}><Image src="/images/toner.svg" width={60} height={60} alt="toner" /></div>
                        <div> Картриджи</div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.service_icon}><Image src="/images/service.svg" width={60} height={60} alt="service" /></div>
                        <div>Сервис и обслуживание</div>
                    </div>
                    <div className={styles.service}>
                    <div className={styles.service_icon}><Image src="/images/it.svg" width={50} height={60} alt="it" /></div>
                        <div>IT аутсорсинг</div>
                    </div>
                </div>
                </div>
                
                {/* <Image className={styles.image} src="/images/hero.png" alt="Pro System office" quality={100} fill objectFit="cover"/> */}
            </div>
        </div>
    )
}

export default Hero;