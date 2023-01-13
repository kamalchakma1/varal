import style from "./address.module.css"
const Address=()=>{
    return(
        // === MAIN CONTAINER === //
        <div className={style.address}>
            {/* === HEADER === */}
            <h5 className={style.address__header}>Address</h5>
            {/* === PARAGRAPH === */}
            <p className={style.address__para1}>608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah Lake Towers <br></br>Dubai <br></br>United Arab Emirates</p>
            <p className={style.address__para2}>Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4]  <br></br>M: +971 55 794 2016<br></br>

O: +971 4 447 2061</p>
        </div>
    )
}
export default Address