import style from "./subscribe.module.css"
import group34 from "../Assets/Group 34.png"
const Subscribe=()=>{
    return(
        /* === MAIN CONTAINER === */
        <div className={style.subscribeDiv}>
            {/*  === HEADER === */ }
            <h5 className={style.subscribeDiv__header} id={style.subscribeDiv__header__desktop}> Subscribe Now</h5>
            <h5 className={style.subscribeDiv__header} id={style.subscribeDiv__header__mobile}> Subscribe to our<br></br> Newsletter</h5>
            {/*  === PARAGRAPH === */}
            <p className={style.subscribeDiv__para}>Sunbscribe now to receive our 
Newsletters about amazing 
opportunities in Dubai</p>
            {/* === INPUT BOX === */}
    <input className={style.subscribeDiv__input}type="text" placeholder="Enter email address"/>
            {/* === IMAGE === */}
    <img className={style.subscribeDiv__image}src={group34}/>
        </div>
    )
}
export default Subscribe