import img1 from "../../assets/images/InfoSection-img1.svg";
import img2 from "../../assets/images/InfoSection-img2.svg";
import img3 from "../../assets/images/InfoSection-img3.svg";
import "./InfoSection.css";

function InfoSection() {
    return (
        <section className="info-section">
            <div className="wrapper">
                <h2 className="info-section__title title">
                    What we do
                </h2>
                <div className="info-section__subtitle subtitle">
                    This is some text inside of a div block.
                </div>
                <div className="info-section__cards">
                    <div className="info-section__cards-item">
                        <img src={img1} alt='no img'></img>
                        <h3 className="info-section__card-title card-title">Graphic design</h3>
                        <p className="info-section__card-desc card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                    <div className="info-section__cards-item">
                        <img src={img2} alt='no img'></img>
                        <h3 className="info-section__card-title card-title">Awesome code</h3>
                        <p className="info-section__card-desc card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                    <div className="info-section__cards-item">
                        <img src={img3} alt='no img'></img>
                        <h3 className="info-section__card-title card-title">Free template</h3>
                        <p className="info-section__card-desc card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoSection;