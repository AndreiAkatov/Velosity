import img1 from "../../assets/images/ServicesSection-img1.jpg";
import img2 from "../../assets/images/ServicesSection-img2.jpg";
import './ServicesSection.css'

import MoreText from "../MoreText/MoreText";
import React, { useState } from "react"



function ServicesSection() {

    const ARR = [
        { more: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { more: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    ]

    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)

    const onClickHandler1 = (event) => {
        setIsShown1(!isShown1);
        event.target.innerHTML = 'Show less'
        if (event.target.classList.contains('active')) {
            event.target.innerHTML = 'Learn more'
        }

    }
    const onClickHandler2 = (event) => {
        setIsShown2(!isShown2);
        event.target.innerHTML = 'Show less'
        if (event.target.classList.contains('active')) {
            event.target.innerHTML = 'Learn more'
        }
    }

    return (
        <section className="services-section">
            <div className="wrapper">
                <h2 className="services-section__title title">
                    Services
                </h2>
                <div className="services-section__subtitle subtitle">
                    This is some text inside of a div block.
                </div>
                <div className="services-section__cards">
                    <div className="services-section__cards-item">
                        <div className="services-section__cards-img">
                            <img className="img" src={img1} alt='no img'></img>
                        </div>
                        <h3 className="services-section__card-title card-title">Services one</h3>
                        <p className="services-section__card-desc card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="services-section__card-desc card-desc"> Suspendisse varius.</p>
                        {
                            isShown1 ? <MoreText text={ARR[0].more} /> : ''
                        }

                        <button onClick={onClickHandler1} className={`services-section__button button-left ${isShown1 === true ? "active" : ""}`}>Learn more</button>
                    </div>
                    <div className="services-section__cards-item">
                        <div className="services-section__cards-img">
                            <img className="img" src={img2} alt='no img'></img>
                        </div>
                        <h3 className="services-section__card-title card-title">Services two</h3>
                        <p className="services-section__card-desc card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="services-section__card-desc card-desc"> Suspendisse varius.</p>
                        {
                            isShown2 ? <MoreText text={ARR[1].more} /> : ''
                        }

                        <button onClick={onClickHandler2} className={`services-section__button button-left ${isShown2 === true ? "active" : ""}`}>Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ServicesSection;