import img1 from "../../assets/images/footer-icon1.svg";
import img2 from "../../assets/images/footer-icon2.svg";
import img3 from "../../assets/images/footer-icon3.svg";
import img4 from "../../assets/images/footer-icon4.svg";
import img5 from "../../assets/images/footer-icon5.svg";



import './footer.css'


function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-upper">
                    <div className="footer-upper__about">
                        <h3 className="footer-title">About velocity</h3>
                        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    </div>
                    <div className="footer-upper__links">
                        <h3 className="footer-title">Useful links</h3>
                        <ul className="links-list">
                            <li className="links-item">
                                <a href="#" className="links-link">Phasellus gravida semper nisi</a>
                            </li>
                            <li className="links-item">
                                <a href="#" className="links-link">Suspendisse nisl elit</a>
                            </li>
                            <li className="links-item">
                                <a href="#" className="links-link">Dellentesque habitant morbi</a>
                            </li>
                            <li className="links-item">
                                <a href="#" className="links-link">Etiam sollicitudin ipsum</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-upper__social">
                        <h3 className="footer-title">Social</h3>
                        <ul className="social-list">
                            <div className="social-list__box">
                                <img className="social-img" src={img1} alt="no img"></img>
                                <li className="links-item">
                                    <a href="#" className="links-link">Twitter</a>
                                </li>
                            </div>
                            <div className="social-list__box">
                                <img className="social-img" src={img2} alt="no img"></img>
                                <li className="links-item">
                                    <a href="#" className="links-link">Facebook</a>
                                </li>
                            </div>
                            <div className="social-list__box">
                                <img className="social-img" src={img3} alt="no img"></img>
                                <li className="links-item">
                                    <a href="#" className="links-link">Pinterest</a>
                                </li>
                            </div>
                            <div className="social-list__box">
                                <img className="social-img" src={img4} alt="no img"></img>
                                <li className="links-item">
                                    <a href="#" className="links-link">Google</a>
                                </li>
                            </div>
                            <div className="social-list__box">
                                <img className="social-img" src={img5} alt="no img"></img>
                                <li className="links-item">
                                    <a href="#" className="links-link">Webflow</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="footer-lower">
                <div className="wrapper">
                    <div className="copyright-text">Copyright Velocity Inc. Made in Webflow.</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;