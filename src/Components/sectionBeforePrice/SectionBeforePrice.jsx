import style from "./sectionBeforePrice.module.css"
const SectionBeforePrice=(props)=>{
    return(

        // === MAIN CONTIANER === //
        <div className={style.sectionBeforePrice}>
            {/* === PARAGRAPH === */}
            <p className={style.sectionBeforePrice__para}>{props.para}</p>
            {/* === ANCHOR TAG === */}
            <a href="#">{props.linkPara}</a>
        </div>
    )
}
export default SectionBeforePrice