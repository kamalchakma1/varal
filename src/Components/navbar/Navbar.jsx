import style from "./navbar.module.css"
import logo from "../Assets/Group 114.png"
const Navbar=()=>{
    return(

        // === MAIN CONTAINER === //
        <div className={style.navbarDiv}>

            <div className={style.navbarDiv__container}>

                {/* === LOGO === */}
                <div className={style.navbarDiv__container__logo}>
                    {/* === LOGO IMAGE === */}
                    <img src={logo} alt="logo"/>
                </div>
                    {/* === MENU ===  */}
                <div className={style.navbarDiv__container__menu}>

                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>About Us</li>
                        <li><button>Start a Company</button></li>
                    </ul>

                    {/* === HAMBURGER === */}
                    <div className={style.navbarDiv__container__hamburger}>
                        <input type="checkbox" className={style.navbarDiv__container__hamburger__input} />
                        <div className={style.navbarDiv__container__hamburger__line1}></div>
                        <div className={style.navbarDiv__container__hamburger__line2}></div>
                        <div className={style.navbarDiv__container__hamburger__line3}></div>

                    {/* === SUBMENU === */}
                        <ul className={style.navbarDiv__container__hamburger__subMenus}>
                             <li>Home</li>
                             <li>Services</li>
                             <li>Pricing</li>
                             <li>About Us</li>
                             <li><button>Start a Company</button></li>                         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar