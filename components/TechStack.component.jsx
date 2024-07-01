import styles from './tech-stack.module.css';

import { techStack } from '../data';

 const TechStack = ({ style }) => {
    return (
        <section style={style}>
            <ul className={styles.tech_stack__container}>
                {techStack.map((tech) => 
                    <li key={tech.id}>
                        <p style={{color: tech.color}} title={tech.title}><tech.icon /></p>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default TechStack;