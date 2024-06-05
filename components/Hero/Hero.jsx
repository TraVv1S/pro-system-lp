import Image from 'next/image';
import styles from './Hero.module.scss'
import Header from '../Header/Header';

const Hero = () => {
    return (
        <div className={styles.block}>
            <div className={styles.wrapper}>
            <div className={styles.content}> 
                <h1 className={styles.heading}>Комплексное обслуживание IT-инфраструктуры вашего бизнеса</h1>
                <button className={styles.button}>Оставить заявку</button>
                </div>
                
                {/* <Image className={styles.image} src="/images/hero.png" alt="Pro System office" quality={100} fill objectFit="cover"/> */}
            </div>
        </div>
    )
}

export default Hero;