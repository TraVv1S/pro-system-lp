import Image from 'next/image';
import { Roboto, Raleway } from 'next/font/google'
import classes from './Services.module.scss'

import { services } from '@/app/constants';

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['400', '500', '700'],
  });

const Services = () => {
    return (
        <section className={classes.section} id="products">
            <h2>Услуги</h2>
            {services.map((service,i) => (
                    <div key={i} className={classes.serviceItem}>
                        <div className={classes.imageWrapper}>
                            <Image src={service.image} alt={service.title} fill/>
                        </div>
                        
                        <div className={classes.content}> 
                            <h3>{service.title}</h3>
                            <div className={`${classes.text} ${roboto.className}`}>
                                {service.text}
                            </div>
                            <button className={classes.secondaryButton}>Оставить заявку</button>
                        </div>
                        
                    </div>
                )) }
            
            
        </section>
    )
}

export default Services;