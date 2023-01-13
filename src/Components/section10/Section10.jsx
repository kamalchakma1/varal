import style from "./section10.module.css"
import vector4 from "../Assets/Vector-4.png"
const Section10=(props)=>{
    return(

        // === MAIN CONTAINER === //
        <div className={style.section10Div}>
            {/* === ICON === */}
            <i class="fa-solid fa-square-rss"></i>
            {/* === HEADER === */}
            <p className={style.section10Div__header}>{props.header}
            <p className={style.section10Div__postTime}>5 Minutes</p>
            
            </p>
        </div>
    )
}
export default Section10