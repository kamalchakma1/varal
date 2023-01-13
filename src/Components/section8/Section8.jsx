// PRICE CARDS
import style from "./section8.module.css"
const Section8=(props)=>{
    return(

        // === MAIN CONTAINER === //
        <div className={style.section8Div}>

            {/* === HEADER === */}
            <h4 className={style.section8Div__header}>{props.header}</h4>
             <h3 className={style.section8Div__price}>${props.price} <span> One Time Payment</span></h3>
             <p className={style.section8Div__header__subHeading}>{props.subHeader}</p>
             {/* === FEATURES === */}
             <ul className={style.section8Div__price__features}>
                <li><i class="fa-regular fa-circle-check"></i>Attestation Charges</li>
                <li><i class="fa-regular fa-circle-check"></i>Registered Agent</li>
                <li><i class="fa-regular fa-circle-check"></i>Registered Office</li>
                <li><i class="fa-regular fa-circle-check"></i>Varal Administrative</li>
                <li><i class="fa-regular fa-circle-check"></i>Preparing Statutory File</li>
                <li><i class="fa-regular fa-circle-check"></i>Liasing with Registration Authorities</li>
                <li><i class="fa-regular fa-circle-check"></i>Due Diligence Appraisal</li>
                <li><i class="fa-regular fa-circle-check"></i>Keeping The Register</li>
                <li><i class="fa-regular fa-circle-check"></i>Seal Charges</li>
                <li><i class="fa-regular fa-circle-check"></i>Certificate of Good Standing</li>               
             </ul>
             <button className={style.section8Div__button}>Continue</button>
        </div>
    )
}
export default Section8