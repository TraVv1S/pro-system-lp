'use client'
import Image from 'next/image';
import classes from './About.module.scss';
import { motion } from 'framer-motion';
import AnimatedCounter from '../Counter/AnimatedCounter';

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
      <Image fill src={"images/waves_bg1.jpg"} alt="waves background" />
      <h2>О нас</h2>
      <div className={classes.description}>
        <p><strong>Pro System</strong> - это команда профессионалов с многолетним опытом в ремонте и обслуживании офисной техники.</p>
        <p>Наша команда обслуживает более 250 едениц офисной техники в день.</p>
        <p>Целью нашей работы является не единовременное предоставление услуги, а постоянное сотрудничество с оптимальными для клиента расходами.</p>
      </div>
      
        <div className={classes.statItem}>
          <div>более</div>
          <div className={classes.counter}> <AnimatedCounter from={0} to={300} /></div>
          <motion.div
            className={classes.border}
            initial={{ width: 0 }}
            whileInView={{
              width: "100%"
            }}
            transition={{
              duration: 6,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          ></motion.div>
          <p>Клиентов обслуживается нашей командой</p>
        </div>
        <div className={classes.statItem}>
          <div>более</div>
          <div className={classes.counter}><AnimatedCounter from={40000} to={50000} /></div>
          <motion.div
            className={classes.border}
            initial={{ width: 0 }}
            whileInView={{
              width: "100%"
            }}
            transition={{
              duration: 6,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          ></motion.div>
          <p>Картриджей заправляется кадждый год</p>
        </div>
        <div className={classes.statItem}>
          <div>более</div>
          <div className={classes.counter}><AnimatedCounter from={0} to={10} /></div>
          <motion.div
            className={classes.border}
            initial={{ width: 0 }}
            whileInView={{
              width: "100%"
            }}
            transition={{
              duration: 6,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          ></motion.div>
          <p>Лет на рынке сервиса оргтехники</p>
        </div>
      
    </motion.section>
  );
};

export default About;
