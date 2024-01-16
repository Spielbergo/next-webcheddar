import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from '../styles/social-icons.module.css';

const SocialIcons = () => {
    return (
        <>
        {/* Social Icons */}
        <div>
            <ul className={`${styles.social_icons__component}`}>                    
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>                    
            </ul>
        </div>
        </>
    )
}

export default SocialIcons;