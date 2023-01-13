import style from "./search.module.css"
const Search=()=>{
    return(

        // === MAIN CONTAINER === //
        <div className={style.searchDiv}>

        {/* === SEARCH ICON ===  */}
            <i class="fa-solid fa-magnifying-glass"></i>
        {/* === SEARCH BOX === */}
          <input type="text" placeholder="Search a Term | Topic" className={style.searchDiv__searchBox}/>
          
        </div>
    )
}
export default Search