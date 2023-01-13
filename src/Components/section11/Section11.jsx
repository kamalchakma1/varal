import style from "./section11.module.css" 
const Section11=(props)=>{
    
    return(

        /* === MAIN CONTAINER === */
        <div className={style.section11Div}>

            <h5 className={style.section11Div__header}>{props.header}</h5>
         
            <ul className={style.section11Div__list}>

               {
                props.list.map((x)=>{
                    return(

                        <li>{x}</li>
                    )
                })
               }
            </ul>
        </div>
    )
}
export default Section11