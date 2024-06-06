import classes from "./Contact.module.scss"

const Contact = () => {
    return (
        <section className={classes.section}>
        <h2>Свяжитесь с нами</h2>
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
    )
}

export default Contact;