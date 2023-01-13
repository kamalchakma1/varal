import style from "./section3.module.css"
import illustration from "../Assets/ILLUSTRATION.png"
const Section3=()=>{
    return(
        <div className={style.section3Div}>
            
                {/* === CONTENT === */}
           <div className={style.section3Div__content}>
                {/* === TEXT BEFORE HEADER === */}
                <a href="#">Claim a Free Quote</a>

                {/* === HEADER === */}
                <h2 className={style.section3Div__content__header}>Get started on fulfilling your Dubai or UAE dream.</h2>
               
                {/* === ORANGE LINE === */}
                <div className={style.section3Div__content__orangeLine}></div>
                {/* === TEXT AFTER HEADER/IMAGE(IN MOBILE VIEW) ===  */}
                <a href="#" className={style.section3Div__secondAnchor}>UAE & Offshore Company</a>

                {/* === PARAGRAPH === */}
                <p className={style.section3Div__content__para}>We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.</p>
                
                {/* === BUTTONS === */}
                <button className={style.section3Div__content_button1}>Start a Company</button>
                <button className={style.section3Div__content_button2}>Renew a Company</button>
           </div>

                {/* === IMAGE === */}
             <img className={style.section3Div__image}src={illustration}/>
        </div>
    )
}
export default Section3