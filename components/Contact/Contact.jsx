import classes from "./Contact.module.scss"
import Image from "next/image";

const Contact = () => {
    return (
        <section className={classes.section} id="contact">
        <h2>Свяжитесь с&nbsp;нами</h2>
        <div className={classes.content}>
          <div className={classes.timeline}>
            <ul>
              <li className={classes.step}>
                <Image src="/images/time1.svg" width={68} height={68} alt="step-1" />
                <p>Получив ваше сообщение, наши консультанты свяжутся с вами в ближайшее время, чтобы уточнить особенности запроса.</p>
              </li>
              <li className={classes.step}>
                <Image src="/images/time2.svg" width={68} height={68} alt="step-2" />
                <p>Затем мы детально изучаем требования, готовим коммерческое предложение и высылаем вам предварительное специалистов.</p>
              </li>
              <li className={classes.step}>
                <Image src="/images/time3.svg" width={68} height={68} alt="step-3" />
                <p>Мы организовываем встречу с вами, чтобы обсудить предложенные варианты и прийти к соглашению.</p>
              </li>
              <li className={classes.step}>
                <Image src="/images/time4.svg" width={68} height={68} alt="step-4" />
                <p>После подписания контракта, наши специалисты в кратчайшие сроки приступают к работе.</p>
              </li>
            </ul>
          </div>
          <form className={classes.contactForm}>
            
            <label htmlFor="name">
              Имя
              <input type="text" name="name" placeholder="Ваше имя"/>
            </label>
            <label htmlFor="phone">
              Телефон
              <input
                type="tel"
                name="phone"
                placeholder="+7 ___ ___ __ __"
              />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" name="email" placeholder="name@email.ru"/>
            </label>
            <label htmlFor="message">
              Сообщение
              <textarea name="message"></textarea>
            </label>
            <button type="submit" className={classes.button}>Отправить</button>
          </form>
        </div>
        
      </section>
    )
}

export default Contact;