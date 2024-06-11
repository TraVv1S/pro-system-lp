import Image from 'next/image';
import classes from './Advantages.module.scss';

const Advantages = () => {
  return (
    <>
    <div className={classes.advantages} id="advantages">
        <div className={classes.main}>
          <h2 className={classes.title}>Преимущества</h2>
          <p className={classes.desc}> За 16 лет работы мы познали все тонкости реализации проектов: как эффективно организовывать работу и обеспечивать качественный результат.</p>
        </div>
        
        <div className={classes.advantageItem}>
          <Image className={classes.background} src='/images/large_printer.png' fill alt="large printer" />
        </div>
        <div className={classes.advantageItem}>
          <h3>Бесплатная доставка</h3>
          <p>картриджей, запчастей и расходных материалов в пределах КАД</p>
        </div>
        <div className={classes.advantageItem}>
          <h3>Проверенные поставщики</h3>
          <p>которые имеют все необходимые лицензии и сертификаты</p>
        </div>
        <div className={classes.advantageItem}>
          <Image className={classes.background} src='/images/cartrige.png' fill alt="large printer" />
          <div className={classes.content}>
            <h3>Уверенность в оригинальности</h3>
            <p>Гарантируем оригинальность поставляемой продукции</p>
          </div>
        </div>
        <div className={classes.advantageItem}>
          <h3>Квалифицированные специалисты</h3>
          <p>картриджей, запчастей и расходных материалов в пределах КАД </p>
        </div>
        <div className={classes.advantageItem}>
          <h3>Контроль закупок</h3>
          <p>картриджей, запчастей и расходных материалов в пределах КАД </p>
        </div>
        <div className={`${classes.logoItem} ${classes.advantageItem}`}>
          <Image src="/images/logo_b.svg" width={150} height={50} alt="pro system logo" />
        </div>
        
      </div>
      <div className={classes.wave}>
        <Image src='/images/waves_bg4.svg' fill alt="" />
      </div>
    </>
  );
};

export default Advantages;
