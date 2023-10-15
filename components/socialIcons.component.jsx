import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialIcons = () => {
    return (
        <>
        {/* Social Icons */}
        <div>
            <ul className="social_icons__component list-none">                    
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>                    
            </ul>
        </div>
        </>
    )
}

export default socialIcons;