import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {

    return (
        <footer className={styles.block}>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <h3>Комплексное обслуживание печатной техники в вашем офисе</h3>
                    <div className={styles.links}>
                        <a href="tel:+78123397058">+7 (812) 339-70-58</a>
                        <a href="mailto:info@prosystem.spb.ru">info@prosystem.spb.ru</a>
                    </div>
                    
                    <div>© 2007-2024 ООО “Про Систем”</div>
                </div>
                
                <nav className={styles.menu}>
                    <div className={styles.goTop}>
                        <Image src="/images/arrow_up.svg" width={40} height={40} alt="pro system logo" />
                    </div>
                    
                
                    <ul>
                        <li><a href="#products">Услуги</a></li>
                        <li><a href="#about">О компании</a></li>
                        <li><a href="#advantages">Приемущества</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </nav>
                
            </div>
        </footer>
    )
}

export default Footer;