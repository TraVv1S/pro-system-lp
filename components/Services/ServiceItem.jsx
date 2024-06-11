'use client'

import Image from 'next/image';
import classes from './Services.module.scss';
import { Roboto } from 'next/font/google'
import { motion } from 'framer-motion';

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['400', '500', '700'],
  });


const ServiceItem = ({title, image, text}) => {
    return (
        <motion.div
            className={classes.serviceItem}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className={classes.imageWrapper}>
                <Image src={image} alt={title} fill/>
            </div>
            
            <div className={classes.content}> 
                <h3>{title}</h3>
                <div className={`${classes.text} ${roboto.className}`}>
                    {text}
                </div>
                <button className={classes.secondaryButton}>Оставить заявку</button>
            </div>
            
        </motion.div>
    )
}

export default ServiceItem;