import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.block}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Image src="/images/logo_b.svg" width={150} height={50} alt="pro system logo" />
                </div>
                <nav className={styles.mainMenu}>
                    <ul>
                        <li><a href="#products">Услуги</a></li>
                        <li><a href="#about">О компании</a></li>
                        <li><a href="#advantages">Приемущества</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </nav>
                <div className={styles.contactsWrapper}>
                    <div className={styles.icon}>
                        <Image src="/images/mobile.svg" width={30} height={35} alt="mobile phone" />
                    </div>
                    <div className={styles.contacts}>
                        Санкт-Петербург
                        <a href='tel:+78123397058'>+7 (812) 339-70-58</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;