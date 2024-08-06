import { Turnstile } from "@marsidev/react-turnstile";
import classes from "./Form.module.scss";

const Form = () => {
  return (
    <form className={classes.contactForm} action="sendMail.php" method="post">
      <label htmlFor="name">
        Имя
        <input type="text" name="name" placeholder="Ваше имя" />
      </label>
      <label htmlFor="phone">
        Телефон
        <input type="tel" name="phone" placeholder="+7 ___ ___ __ __" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" placeholder="name@email.ru" />
      </label>
      <label htmlFor="message">
        Сообщение
        <textarea name="message"></textarea>
      </label>
      <Turnstile siteKey="0x4AAAAAAAgpfdl8sShzIoRP" />
      <button type="submit" className={classes.button}>
        Отправить
      </button>
    </form>
  );
};

export default Form;
