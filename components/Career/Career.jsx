import classes from "./Career.module.scss";

const Career = () => {
  return (
    <section className={classes.block}>
      <div>
        <h2>Карьера в Prosystem</h2>
        <p className={classes.about}>
          Развиваемся сами и помогаем другим. Официальное трудоустройство, белая
          зарплата и бонусы.
        </p>
      </div>

      <a
        href="https://spb.hh.ru/search/vacancy?L_is_autosearch=false&area=2&ored_clusters=true&employer_id=2780129"
        target="_blank"
      >
        Посмотреть все вакансии
      </a>
      {/* <div className={classes.vacancy}>
                <div className={classes.description}>
                    <h4>Руководитель отдела продаж</h4>
                    <div className={classes.conditions}>
                        <div className={classes.city}>
                            <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><circle cx="9.9987" cy="9.16667" r="1.66667" stroke="#272d65"  stroke-width="2"></circle><path d="M10.0013 18.333L14.5847 13.7497C17.116 11.2184 17.116 7.11435 14.5847 4.58305C12.0534 2.05174 7.94931 2.05174 5.41801 4.58305C2.8867 7.11435 2.88671 11.2184 5.41801 13.7497L10.0013 18.333Z" stroke="#272d65"  stroke-width="2" stroke-linejoin="round"></path></svg>
                            Санкт-Петербург
                        </div>
                        <div className={classes.time}>
                            <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><circle cx="10" cy="10" r="7.5" stroke="#272d65"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M9.16797 6.66699V10.8337H13.3346" stroke="#272d65"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            Полная занятость
                        </div>
                    </div>
                </div>
                <div className={classes.money}>
                    от 100 000 ₽
                </div>
                <a href="https://spb.hh.ru/search/vacancy?L_is_autosearch=false&area=2&ored_clusters=true&employer_id=2780129">Подробнее</a>
            </div> */}
      {/* <div className={classes.vacancy}>
                <div className={classes.description}>
                    <h4>Ассистент отдела закупок</h4>
                    <div className={classes.conditions}>
                        <div className={classes.city}>
                            <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><circle cx="9.9987" cy="9.16667" r="1.66667" stroke="#272d65"  stroke-width="2"></circle><path d="M10.0013 18.333L14.5847 13.7497C17.116 11.2184 17.116 7.11435 14.5847 4.58305C12.0534 2.05174 7.94931 2.05174 5.41801 4.58305C2.8867 7.11435 2.88671 11.2184 5.41801 13.7497L10.0013 18.333Z" stroke="#272d65"  stroke-width="2" stroke-linejoin="round"></path></svg>
                            Санкт-Петербург
                        </div>
                        <div className={classes.time}>
                            <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><circle cx="10" cy="10" r="7.5" stroke="#272d65"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M9.16797 6.66699V10.8337H13.3346" stroke="#272d65"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            Полная занятость
                        </div>
                    </div>
                </div>
                <div className={classes.money}>
                    от 60 000 ₽
                </div>
                <a href="https://spb.hh.ru/search/vacancy?L_is_autosearch=false&area=2&ored_clusters=true&employer_id=2780129">Подробнее</a>
            </div> */}
    </section>
  );
};

export default Career;
