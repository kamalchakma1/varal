import style from "./section9.module.css"
const Section9=(props)=>{
    return(
        // === MAIN CONTAINER === //
        <div className={style.section9Div}>
        {/* === HEADER === */}
           <h5 className={style.section9Div__header}>{props.header}</h5>
        </div>
    )
}
export default Section9