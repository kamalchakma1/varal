import style from "./section6.module.css"
import vector from "../Assets/Vector.png"
const Section6=(props)=>{
    return(
        <div className={style.section6Div}>

              {/* ===HERE TAKING IMAGE AS PROPS === */}
           <img className={style.section6Div__img}src={props.image}/>

              {/* ===HERE TAKING HEADER AS PROPS === */}
          <h4 className={style.section6Div__header}>{props.header}</h4>

              {/* ===HERE TAKING PARAGRAPH AS PROPS === */}
            <p className={style.section6Div__para}>{props.para}</p>
            
            <a className={style.section6Div__learn_More}href="#">Learn more  <img className={style.section6Div__right_Arrow}src={vector}/></a>
           
        </div>
    )
}
export default Section6