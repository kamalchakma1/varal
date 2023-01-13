import style from "./section7.module.css"
const Section7=()=>{
    return(
        // === CONTAINER === //
        <div className={style.section7Div}>
            {/* === PARAGRAPH === */}
            <h3 className={style.section7Div__para}>Most popular affordable pricing per jurisdictions are brought to you to 
            kick off your adventure.</h3>
            {/* === ORANGE LINE === */}
        <div className={style.section7Div__orangeLine}></div>
        </div>
    )
}
export default Section7