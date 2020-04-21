import React from 'react';
import './Footer.css';

const Foot = () => {
    return(

  
            <footer>
                {/* Footer main */}
                <section className="ft-main">
                    <div className="ft-main-item">
                        <h2 className="ft-title">About</h2>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portofolio</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Resources</h2>
                        <ul>
                            <li><a href="#">Docs</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Contact</h2>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Advertise</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Stay Updated</h2>
                        <p>Subscribe to our newsletter to get our latest news.</p>
                        <form className="special">
                            <input type="email" name="email" placeholder="Enter email address" className="in_in" />
                            <input type="submit" value="Subscribe"/>
                        </form>
                    </div>
                </section>

                {/* Footer Social */}
                <section className="ft-social">
                    <ul className="ft-social-list">
                        <li><a href="#"><img src={require('../img/facebook.png')} style={{ width: '1.8rem' }}></img><i className="fab fa-facebook"/></a></li>
                        <li><a href="#"><img src={require('../img/twitter.png')} style={{ width: '1.8rem' }}></img><i className="fab fa-facebook"/></a></li>
                        <li><a href="#"><img src={require('../img/instagram.png')} style={{ width: '1.8rem' }}></img><i className="fab fa-facebook"/></a></li>
                        <li><a href="#"><img src={require('../img/linkedin.png')} style={{ width: '1.8rem' }}></img><i className="fab fa-facebook"/></a></li>
                        <li><a href="#"><img src={require('../img/youtube.png')} style={{ width: '1.8rem' }}></img><i className="fab fa-facebook"/></a></li>
                    </ul>
                </section>

                {/* Footer Legal */}
                <section className="ft-legal">
                    <ul className="ft-social-list">
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>&copy; 2020 Copyright Lease Free Inc.</li>
                    </ul>
                </section>
            </footer>
       
    )
}
export default Foot