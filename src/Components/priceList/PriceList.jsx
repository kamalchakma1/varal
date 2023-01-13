import Section8 from "../section8/Section8"
import style from "./priceList.module.css"
const PriceList=()=>{
    return(
        <div className={style.priceList}>

            {/* === CARDS CONTAINER ===  */}
            <div className={style.priceList__conatiner}>  

                {/* === CARDS === */}
                <div className={style.priceList__conatiner__cards}>                
                   <div id="card1" ><Section8/></div>
                   <div id="card2" ><Section8/></div>
                   <div id="card3"><Section8/></div>                
                </div>
            </div>

            {/* === CRADS CONTROLLER === */}
            <div className={style.priceList__cotainer__controller}>
                {/* === ROUND BUTTONS === */}
                <a href="#card1" className={style.card1}><button></button></a><br></br><br></br>
                <a href="#card2" className={style.card2}><button></button></a><br></br><br></br>
                <a href="#card3" className={style.card3}><button></button></a><br></br><br></br>
            </div>
        </div>
    )
}
export default PriceList