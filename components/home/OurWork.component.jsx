import Image from 'next/image';
import Link from 'next/link';

import { projectsHome } from '../../constants';

import styles from './our-work.module.css';

const OurWork = () => {
    return (
        <section>
            <div id="ourProjects" className={styles.our_work__titles}>
                <h2 className="section_title_01">Our Work</h2>
                <h3 className="section_title_02">From Ideas to Impactful Websites</h3>
                <p className="section_text">At Web Cheddar Web Solutions, we're great at making standout websites. Using a mix of creativity, tech know-how, and clear planning, our work clearly shows how we meet the needs of our clients. Check out our projects and see how we turn ideas into great websites.</p>
            </div>
            
            {/* Cards */}
            <div className={styles.cards__container}>
                {projectsHome.map((project) =>                 
                    <div key={project.id} className={`${styles.cards__card} shadow`}>
                        <Link href={project.url} target="_blank">
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
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default OurWork;
