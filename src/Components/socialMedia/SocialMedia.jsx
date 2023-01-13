import style from "./socialMedia.module.css"
import vector5 from "../Assets/Vector-5.png"
import vector6 from "../Assets/Vector-6.png"
import vector7 from "../Assets/Vector-7.png"
import vector8 from "../Assets/Vector-8.png"
const SocialMedia=()=>{
    return(

        // === MAIN CONTAINER === //
        <div className={style.socialMediaDiv}>

            {/* === IMAGES === */}
            <img src={vector5} alt="facebook"/>
            <img src={vector6} alt="instagram"/>
            <img src={vector8} alt="linkedin"/>
            <img src={vector7} alt=" youtube"/>          

        </div>
    )
}
export default SocialMedia