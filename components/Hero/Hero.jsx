'use client'
import Image from 'next/image';
import styles from './Hero.module.scss'
import Header from '../Header/Header';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className={styles.block}>
            <div className={styles.wrapper}>
            <div className={styles.content}>
                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <h1 className={styles.heading}>Комплексное обслуживание <span>IT&#8209;инфраструктуры</span> вашего бизнеса</h1>
                    <motion.button
                        onClick={() => window.modal.showModal()}
                        className={styles.button}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >Оставить заявку</motion.button>
                </motion.div> 
                
                
                <div className={styles.services}>
                    
                    <div className={styles.service}>
                        <div className={styles.service_front}>
                            <div className={styles.service_icon}><Image src="/images/printer.svg" width={60} height={60} alt="printer" /></div>
                            <div> Оргтехника</div>
                        </div>
                        <div className={styles.service_reverse}>
                            <div className={styles.text}>Поставка печатного оборудования любого класса</div>
                            <div className={styles.buttons}>
                                <button className={styles.button} onClick={() => window.modal.showModal()}>Заказать</button>
                                <a href="#products">Подробнее</a>
                            </div> 
                        </div>
                    </div><div className={styles.service}>
                        <div className={styles.service_front}>
                            <div className={styles.service_icon}><Image src="/images/toner.svg" width={60} height={60} alt="toner" /></div>
                            <div> Картриджи</div>
                        </div>
                        <div className={styles.service_reverse}>
                            <div className={styles.text}>Поставка и заправка картриджей и иных расходных материалов для печати</div>
                            <div className={styles.buttons}>
                                <button className={styles.button} onClick={() => window.modal.showModal()}>Заказать</button>
                                <a href="#products">Подробнее</a>
                            </div> 
                        </div>
                    </div><div className={styles.service}>
                        <div className={styles.service_front}>
                            <div className={styles.service_icon}><Image src="/images/service.svg" width={60} height={60} alt="service" /></div>
                            <div> Сервис и обслуживание</div>
                        </div>
                        <div className={styles.service_reverse}>
                            <div className={styles.text}>Ремонт и сервисное обслуживание печатной техники любого уровня</div>
                            <div className={styles.buttons}>
                                <button className={styles.button} onClick={() => window.modal.showModal()}>Заказать</button>
                                <a href="#products">Подробнее</a>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.service_front}>
                            <div className={styles.service_icon}><Image src="/images/it.svg" width={45} height={60} alt="it" /></div>
                            <div> IT аутсорсинг</div>
                        </div>
                        <div className={styles.service_reverse}>
                            <div className={styles.text}>IT инфраструктура вашего офиса под ключ</div>
                            <div className={styles.buttons}>
                                <button className={styles.button} onClick={() => window.modal.showModal()}>Заказать</button>
                                <a href="#products">Подробнее</a>
                            </div> 
                        </div>
                    </div>
                    
                </div>
                </div>
                
                {/* <Image className={styles.image} src="/images/hero.png" alt="Pro System office" quality={100} fill objectFit="cover"/> */}
            </div>
        </div>
    )
}

export default Hero;