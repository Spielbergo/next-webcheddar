import { contactDetails } from '../data/index';
import SocialIcons from './SocialIcons.component';

const Address = ({ className = "" }) => {
    return (
        <address>
            <ul>
                {contactDetails.map((contact) => 
                    <li key={contact.id}>
                        {contact.id === 'contact-email' ? (
                            <a href={`mailto:${contact.detail}`} target='_blank'>{contact.detail}</a>
                        ) : contact.id === 'contact-phone' ? (
                            <a href={`tel:${contact.detail}`} target='_blank'>{contact.detail}</a>
                        ) : (
                            contact.detail
                        )}
                    </li>
                )}
            </ul>
            <SocialIcons />
        </address>
    )
}

export default Address;