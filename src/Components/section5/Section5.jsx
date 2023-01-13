import style from "./section5.module.css"
const Section5=(props)=>{
    return(
       <>
           <div className={style.section5Div}>

              {/* ===HERE TAKING IMAGE AS PROPS === */}
                <img src={props.img} alt="" className={style.section5Div__img}/>

              {/* ===HERE TAKING HEADER AS PROPS === */}
                <h4 className={style.section5Div__header}>{props.header}</h4>

              {/* ===HERE TAKING PARAGRAPH AS PROPS === */}
                <p className={style.section5Div__para}>{props.para}</p>
                
                <a className={style.section5Div__getStarted}href="#">Get Started</a>
           </div>
       </>
    )
}
export default Section5