import style from "./feedback.module.css"
import vector3 from "../Assets/Vector-3.png"
const Feedback=(props)=>{
    return(
        
            //  === MAIN CONTANER === //
        <div className={style.feedbackDiv}>
            {/* === QUOTES MARK 1 === */}
            <p className={style.feedback__quotes1}>"</p>

            {/* === IMAGE === */}
            <img className={style.feedbackDiv__image}src={vector3}/>

            {/* === PARAGRAPH === */}
            <p className={style.feedbackDiv__para}>

                 {props.para}

                 {/* === QUOTES MARK 1 === */}  
                <p className={style.feedback__quotes2}>"</p>

                {/* === AUTHOR === */}
                <h5 className={style.feedbackDiv__author}>{props.author}</h5>
            </p>

            {/* === LINE LEFT OF AUTHOR === */}
            <div className={style.feedbackDiv__line}></div>
        </div>
    )
}
export default Feedback