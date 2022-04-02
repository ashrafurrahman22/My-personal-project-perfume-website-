import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerName'>
                <h2>Al Haqqah</h2>
                <p>Follow the sunnah, Not the society</p>
            </div>
            <div className='copyright'>
                <p>Copyright © 2025 al-haqqah.com</p>
            </div>
            <div className='payBill'>
                <h4>Make Shopping and get Discount</h4>
                <p>You can Pay by this</p>
                <p>Bkash,Nagad, DebitCard</p>
            </div>
        </div>
    );
};

export default Footer;