import Image from 'next/image';

import { projectsHome } from '../../constants';

import styles from '../../styles/home.module.css';

const OurWork = () => {
    return (
        <section>
            <div className={styles.text__container}>
                <h2>Our Work</h2>
                <p>At Web Cheddar Web Solutions, we're good at making standout websites. Using a mix of creativity, tech know-how, and clear planning, our work clearly shows how we meet the needs of our clients. Dive into our projects and see how we turn ideas into great websites.</p>
            </div>
            
            {/* Cards */}
            <div className={styles.cards__container}>
                {projectsHome.map((project) => 
                    <div key={project.id} className={`${styles.cards__card} ${styles.shadow}`}>
                        <Image  
                            src={project.image}
                            alt={project.alt}
                            width={250}
                            height={250}
                        />
                        <div className={styles.cards__text_container}>
                            <h2 className={styles.cards__title}>{project.title}</h2>
                            <p>{project.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default OurWork;