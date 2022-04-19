import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footerflex">
                <div className='footer-text'>
                    <p className='copyright-text'>Copyright &copy; All Rights Reserved by ArroyitoVapeShop.</p>
                </div>
                <div className='social-icons'>
                        <a class="facebook" href="#"><i class='bx bx-sm bxl-facebook icon'></i></a>
                        <a class="instagram" href="#"><i class='bx bx-sm bxl-instagram icon' ></i></a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer;