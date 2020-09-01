import React from 'react';

import PlaceIcon from '@material-ui/icons/Place';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function ContactProfile() {
    return (
        <ul className="contact">
            <li className="contact__item contact__city">
                <PlaceIcon /> <span>Porto Alegre, RS - Brazil</span>
            </li>
            <li className="contact__item contact__email">
                <EmailIcon /> <a href="mailto:lorenzoni.brunno@gmail.com">lorenzoni.brunno@gmail.com</a>
            </li>
            <li className="contact__item contact__phone">
                <WhatsAppIcon /> <a href="tel:+5551 99388-8840">+55 51 99388-8840</a>
            </li>
            <li className="contact__item contact__phone">
                <CalendarTodayIcon /> <span>07/02/1997 ({Math.floor((new Date() - new Date("1997/2/7"))/31557600000)} anos)</span>
            </li>
        </ul>
    );
}

export default ContactProfile;
