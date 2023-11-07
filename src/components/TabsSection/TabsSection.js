import img1 from "../../assets/images/tab.jpg";
import img2 from "../../assets/images/first-cat.jpg";
import img3 from "../../assets/images/second-cat.jpg";
import "./tabsSection.css";

import Tab from "../Tab/Tab";
import React, { useState } from "react"

function TabsSection() {
    const [number, setNumber] = useState(1);

    const data = [
        { id: 1, img: img1, title: 'Some Title Here', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', text2: 'Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.', text3: 'Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' },
        { id: 2, img: img2, title: 'Some Title Here2', text1: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', text2: '2Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.', text3: '2Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' },
        { id: 3, img: img3, title: 'Some Title Here3', text1: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', text2: '3Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.', text3: '3Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' },
    ]
    const Info = data.filter((item) => {
        if (item.id === number) {
            return true;
        }
    })

    return (
        <section className="tabs-section">
            <div className="wrapper">
                <div className="tabs-section__inner">
                    <h2 className="tabs-section__title title">
                        Tab Section
                    </h2>
                    <div className="tabs-section__subtitle subtitle">
                        This is some text inside of a div block.
                    </div>
                    <div className="tabs-section__buttons-container">
                        <button className={`tabs-section__button ${number === 1 ? "active" : ""}`} onClick={() => setNumber(1)}>Tab Button 1</button>
                        <button className={`tabs-section__button ${number === 2 ? "active" : ""}`} onClick={() => setNumber(2)}>Tab Button 2</button>
                        <button className={`tabs-section__button ${number === 3 ? "active" : ""}`} onClick={() => setNumber(3)}>Tab Button 3</button>
                    </div>
                    <div className="tabs-section__tabs">
                        {
                            <Tab img={Info[0].img} title={Info[0].title} text1={Info[0].text1} text2={Info[0].text2} text3={Info[0].text3} />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TabsSection;