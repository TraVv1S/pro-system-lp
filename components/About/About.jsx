import classes from './About.module.scss';

const About = () => {
  return (
    <section className={classes.aboutUs}>
      <h2>О нас</h2>
      <div className={classes.description}>
        <p><strong>Pro System</strong> - это команда профессионалов с многолетним опытом в ремонте и обслуживании офисной техники.</p>
        <p>Наша команда обслуживает ежедневно более 250 клиентских печатных машин.</p>
        <p>Целью нашей работы является не единовременное предоставление услуги, а постоянное сотрудничество с оптимальными для клиента расходами.</p>
      </div>
      <div className={classes.stats}>
        <div className={classes.statItem}>
          <span>300+</span>
          <p>Клиентов обслуживается нашей командой</p>
        </div>
        <div className={classes.statItem}>
          <span>50 000+</span>
          <p>Картриджей было заправлено и восстановлено</p>
        </div>
        <div className={classes.statItem}>
          <span>10+</span>
          <p>Лет на рынке сервиса оргтехники</p>
        </div>
      </div>
    </section>
  );
};

export default About;
