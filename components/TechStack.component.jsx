import styles from './tech-stack.module.css';

import { techStack } from '../constants';

 const TechStack = () => {
    return (
        <section>
            <ul className={styles.tech_stack__container}>
                {techStack.map((tech) => 
                    <li key={tech.id}>
                        <p style={{color: tech.color}}><tech.icon /></p>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default TechStack;