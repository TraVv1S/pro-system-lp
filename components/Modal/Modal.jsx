'use client'
import classes from "./Modal.module.scss" 

const Modal = () => {
    return (
        <dialog className={classes.dialog} id="modal" aria-labelledby="dialog-name" open="">
            <div className={classes.close} onClick={() => window.modal.close()}>x</div>
            <h3 className={classes.title} id="dialog-name">Заявка </h3>
            <p>Оставьте Ваши данные, и наш менеджер перезвонит Вам в ближайшее время</p>
            <form className={classes.contactForm}>

                <label htmlFor="name">
                    Имя
                    <input type="text" name="name" placeholder="Ваше имя" />
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
                    <input type="email" name="email" placeholder="name@email.ru" />
                </label>
                <label htmlFor="message">
                    Сообщение
                    <textarea name="message"></textarea>
                </label>
                <button type="submit" className={classes.button}>Отправить</button>
            </form>
        </dialog>
    )
}

export default Modal;