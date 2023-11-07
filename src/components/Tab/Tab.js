import './tab.css'

function Tab(props) {
    return (
        <div className="tab">
            <div className="tab-image">
                <img className="image" src={props.img} alt='no img'></img>
            </div>
            <h3 className="tab-title">
                {props.title}
            </h3>
            <div className="tab-text">
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
            </div>
        </div>
    )
}
export default Tab;