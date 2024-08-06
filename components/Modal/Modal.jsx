"use client";
import classes from "./Modal.module.scss";

const Modal = () => {
  return (
    <dialog
      className={classes.dialog}
      id="modal"
      aria-labelledby="dialog-name"
      open=""
    >
      <div className={classes.close} onClick={() => window.modal.close()}>
        <svg
          aria-hidden="true"
          className="svg-icon iconClearSm"
          width="24"
          height="24"
          viewBox="0 0 14 14"
        >
          <path d="M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z"></path>
        </svg>
      </div>
      <h3 className={classes.title} id="dialog-name">
        Заявка{" "}
      </h3>
      <p>
        Оставьте Ваши данные, и наш менеджер перезвонит Вам в ближайшее время
      </p>
      <form className={classes.contactForm}>
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
        <div class="cf-turnstile" data-sitekey="0x4AAAAAAAgpfdl8sShzIoRP"></div>
        <button type="submit" className={classes.button}>
          Отправить
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
