import React from 'react';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.container}>
      {/* Hero Section */}
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <h1>Комплексное обслуживание печатной техники в вашем офисе</h1>
          <button className={classes.primaryButton}>Оставить заявку</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className={classes.aboutUs}>
        <h2>О нас</h2>
        <p>
          Pro System – это команда профессионалов с многолетним опытом в
          области обслуживания офисной техники. Наша команда обслуживает
          более 300 клиентов по всей России и СНГ.
        </p>
        <div className={classes.stats}>
          <div className={classes.statItem}>
            <span>300+</span>
            <p>Клиентов обслуживаются каждый месяц</p>
          </div>
          <div className={classes.statItem}>
            <span>50 000+</span>
            <p>Картриджей было заправлено и восстановлено</p>
          </div>
          <div className={classes.statItem}>
            <span>10+</span>
            <p>Лет на рынке сервисов</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={classes.services}>
        <h2>Услуги</h2>
        <div className={classes.serviceItem}>
          <img src="/images/service1.png" alt="Заправка картриджей" />
          <h3>Заправка и восстановление картриджей</h3>
          <p>Описание услуги...</p>
          <button className={classes.secondaryButton}>Оставить заявку</button>
        </div>
        <div className={classes.serviceItem}>
          <img src="/images/service2.png" alt="Поставка картриджей" />
          <h3>Поставка картриджей</h3>
          <p>Описание услуги...</p>
          <button className={classes.secondaryButton}>Оставить заявку</button>
        </div>
        <div className={classes.serviceItem}>
          <img src="/images/service3.png" alt="Поставка оборудования" />
          <h3>Поставка печатного оборудования</h3>
          <p>Описание услуги...</p>
          <button className={classes.secondaryButton}>Оставить заявку</button>
        </div>
        <div className={classes.serviceItem}>
          <img src="/images/service4.png" alt="Ремонт принтеров" />
          <h3>Ремонт принтеров</h3>
          <p>Описание услуги...</p>
          <button className={classes.secondaryButton}>Оставить заявку</button>
        </div>
        <div className={classes.serviceItem}>
          <img src="/images/service5.png" alt="Сервисное обслуживание" />
          <h3>Сервисное обслуживание</h3>
          <p>Описание услуги...</p>
          <button className={classes.secondaryButton}>Оставить заявку</button>
        </div>
      </section>

      {/* Advantages Section */}
      <section className={classes.advantages}>
        <h2>Преимущества</h2>
        <div className={classes.advantageItem}>
          <h3>Бесплатная доставка</h3>
          <p>Описание преимущества...</p>
        </div>
        <div className={classes.advantageItem}>
          <h3>Проверенные поставщики</h3>
          <p>Описание преимущества...</p>
        </div>
        <div className={classes.advantageItem}>
          <h3>Квалифицированные специалисты</h3>
          <p>Описание преимущества...</p>
        </div>
        <div className={classes.advantageItem}>
          <h3>Контроль закупок</h3>
          <p>Описание преимущества...</p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className={classes.contactUs}>
        <h2>Свяжитесь с&nbsp;нами</h2>
        <form className={classes.contactForm}>
          <label>
            Имя
            <input type="text" name="name" />
          </label>
          <label>
            Телефон
            <input type="tel" name="phone" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Сообщение
            <textarea name="message"></textarea>
          </label>
          <button type="submit" className={classes.primaryButton}>Отправить</button>
        </form>
      </section>

      {/* Footer */}
      <footer className={classes.footer}>
        <p>Комплексное обслуживание печатной техники в вашем офисе</p>
        <p>
          <span>+7 (812) 339-70-58</span>
          <span>info@prosystem.spb.ru</span>
        </p>
        <nav>
          <ul>
            <li>Услуги</li>
            <li>О компании</li>
            <li>Акции</li>
            <li>Контакты</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default HomePage;
