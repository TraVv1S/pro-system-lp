import classes from './Advantages.module.scss';

const Advantages = () => {
  return (
    <section className={classes.advantages}>
        <h2>Преимущества</h2>
        <div className={classes.advantageItem}></div>
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
  );
};

export default Advantages;
