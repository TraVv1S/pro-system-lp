'use client'
import Image from 'next/image';
import classes from './About.module.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className={classes.section}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <Image fill src={"/images/waves_bg1.jpg"} alt="waves background" />
      <h2>О нас</h2>
      <div className={classes.description}>
        <p><strong>Pro System</strong> - это команда профессионалов с многолетним опытом в ремонте и обслуживании офисной техники.</p>
        <p>Наша команда обслуживает более 250 едениц офисной техники в день.</p>
        <p>Целью нашей работы является не единовременное предоставление услуги, а постоянное сотрудничество с оптимальными для клиента расходами.</p>
      </div>
      
        <div className={classes.statItem}>
          <div>более</div>
          <div className={classes.counter}> 300</div>
          <p>Клиентов обслуживается нашей командой</p>
        </div>
        <div className={classes.statItem}>
          <div>более</div>
          <div className={classes.counter}>500&nbsp;000</div>
          <p>Картриджей заправляется кадждый год</p>
        </div>
        <div className={classes.statItem}>
          <div>более</div>
          <div className={classes.counter}>10</div>
          <p>Лет на рынке сервиса оргтехники</p>
        </div>
      
    </motion.section>
  );
};

export default About;
