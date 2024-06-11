
import { services } from '@/app/constants';
import ServiceItem from './ServiceItem';
import classes from './Services.module.scss'

const Services = () => {
    return (
        <section className={classes.section} id="products">
            <h2>Услуги</h2>
            {services.map((service,i) => (
                    <ServiceItem key={i} title={service.title} image={service.image} text={service.text} />
                )) }
            
            
        </section>
    )
}

export default Services;