
import "./firstSection.css";
function FirstSection() {
    return (
        <section className="first-section">
            <div className="wrapper">
                <h1 className="first-section__title">This is Velocity</h1>
                <div className="first-section__buttons">
                    <button className="first-section__button first-section__button--first">sign up</button>
                    <button className="first-section__button first-section__button--second">Learn more</button>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;