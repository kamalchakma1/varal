import style from "./sectionBeforePrice.module.css"
const SectionBeforePrice1=(props)=>{
    return(
        // === MAIN CONTAINER === //
        <div className={style.sectionBeforePrice}>
            {/* === PARAGRAPH === */}
            <p className={style.sectionBeforePrice__para}>{props.para}</p>
            {/* === ANCHOR TAG === */}
            <a href="#">{props.linkPara}</a><img src={props.vector}/>
        </div>
    )
}
export default SectionBeforePrice1