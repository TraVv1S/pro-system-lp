import classes from './About.module.scss';

const About = () => {
  return (
    <section className={classes.section}>
      <h2>О нас</h2>
      <div className={classes.description}>
        <p><strong>Pro System</strong> - это команда профессионалов с многолетним опытом в ремонте и обслуживании офисной техники.</p>
        <p>Наша команда обслуживает ежедневно более 250 клиентских печатных машин.</p>
        <p>Целью нашей работы является не единовременное предоставление услуги, а постоянное сотрудничество с оптимальными для клиента расходами.</p>
      </div>
      
        <div className={classes.statItem}>
          <div className={classes.counter}>300+</div>
          <p>Клиентов обслуживается нашей командой</p>
        </div>
        <div className={classes.statItem}>
          <div className={classes.counter}>50 000+</div>
          <p>Картриджей было заправлено и восстановлено</p>
        </div>
        <div className={classes.statItem}>
          <div className={classes.counter}>10+</div>
          <p>Лет на рынке сервиса оргтехники</p>
        </div>
      
    </section>
  );
};

export default About;
