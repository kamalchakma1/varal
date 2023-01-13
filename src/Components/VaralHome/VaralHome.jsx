/* ====

 I DIVIDE WIREFRAME INTO SECTIONS FROM TOP TO BOTTOM ADN BUILSD SEPARATE COMPONENT.
 SOME PARTS ARE IN MAIN HOME PAGE.
 
 ====*/

import style from "./varalHome.module.css" 
import Section5 from "../section5/Section5"
import Section6 from "../section6/Section6"
import Section8 from "../section8/Section8"
import Section9 from "../section9/Section9"
import Section10 from "../section10/Section10"
import Section11 from "../section11/Section11"
import Address from "../section11/Address"
import Feedback from"../section12(feedback)/Feedback"
import Subscribe from "../subscribe/Subscribe"
import SocialMedia from "../socialMedia/SocialMedia"
import dungeon from "../Assets/dungeon.png"
import group from "../Assets/Group.png"
import group1 from "../Assets/Group-1.png"
import group2 from "../Assets/Group-2.png"
import illustration1 from "../Assets/ILLUSTRATION1.png"
import Section7 from "../section7/Section7"
import vector from "../Assets/Vector.png"
import SectionBeforePrice from "../sectionBeforePrice/SectionBeforePrice"
import Section3 from"../section3/Section3"
import Search from "../search/Search"
import Navbar from "../navbar/Navbar"
import ellipse21 from "../Assets/Ellipse 21.png"
import vector7 from "../Assets/Ellipse 21.png"
import vector8 from "../Assets/Ellipse 14.png"
import vector10 from "../Assets/Ellipse 28.png"
import vector11 from "../Assets/Ellipse 11.png"
import vector12 from "../Assets/Ellipse 9.png"
import vector16 from "../Assets/Ellipse 26.png"
import vector17 from "../Assets/Ellipse 27.png"
import vector19 from "../Assets/Ellipse 15.png"
import vector14 from "../Assets/Ellipse 12.png"
import ellipse14 from "../Assets/Ellipse 19-1.png"
import group117 from "../Assets/Group 117.png"
import group100 from "../Assets/Group 100.png"
import ellipse11 from "../Assets/Ellipse 11.png"
import ellipse15 from "../Assets/Ellipse 15.png"
import ellipse12 from "../Assets/Ellipse 12.png"
import vector2 from "../Assets/Vector-2.png"
import vector1 from "../Assets/Vector-1.png"
import arrowRight from "../Assets/Vector.png"
import vector6 from "../Assets/Ellipse 16.png"
import white from "../Assets/white.PNG"
import SectionBeforePrice1 from "../sectionBeforePrice1/SectionBeforePrice1"
import PriceList from "../priceList/PriceList"



const VaralHome=()=>{

  // === VARAL SERVICES,POLICES,ABOUT === //
  let list1=["Product","Solutions","Assurance","FAQ","Working at Varal-Singhania"]
  let list2 =["Privacy Policy","Terms & Conditions"]
  let list3 =["About Us","Contact Us"]

    return(
        <>
        <div className={style.varalMain}>

          {/* === NAVBAR === */}
          <Navbar/>

          {/* === SEARCH BOX === */}
          <div className={style.varalMain__searchBox}>
             <Search />
          </div>

          {/* === ORANGE VECTOR 1 === */}
          <img src={ellipse21} className={style.varalMain__vector1}/>

          {/* === GRAY VECTOR 1 === */}
          <img src={ellipse14} className={style.varalMain__vector2}/>

          {/* === SECTION 3 === */}
          <div className={style.varalMain__section3}>
            <Section3/>
          </div>
         
         {/* === VECTOR 2 === */}
         <div className={style.varalMain__vector12}>
          <img src={ellipse12}/>
         </div>

         {/* === TEXT-COMPANY REGISTRATION === */}
         <div className={style.varalMain__comapnyRegistration}>
            <p>Watch the video about UAE or Offshore Company Registration <img src={group117}/></p>
         </div>
          
         {/* === MISSION === */}
         {/* === VECTOR 3 === */}
         <div className={style.varalMain__vector3}>
          <img src={group100}/>
         </div>

         {/* === VECTOR 4 === */}
         <img src={ellipse11} className={style.varalMain__vector4}/>

         {/* === VECTOR 5 === */}
         <img src={ellipse15} className={style.varalMain__vector5}/>
         <div className={style.varalMain__mission}>
          <div className={style.varalMain__mission__orangeLine}></div>
          <h4>Dedicated<br></br> to our mission we are</h4>
          <p> Our services include Company Formation & Renewals,
              Trust & Fiduciary, Tax Residency Setup With Family, Bank
              Accounts, Remote Management, Stock Trading
              Platforms, Ownership Solutions.
          </p>
         </div>

         {/* === SECTION 5 === */}
         <div className={style.varalMain__section5}>
              <Section5          
              img={dungeon}
              header="UAE Free Zone Company"
              para="Your registration agent, will answer all
              of your questions and help you to reach
              a conclusion that meets your objectives
              of investing in the UAE"     
          
              />

            <Section5          
              img={vector2}
              header="Dubai Local Companies"
              para="The Dubai LLC formation documents
              are actually articles of organization or a
              certificate of organization. You can get
              yours today."       
      
            />

            <Section5          
              img={vector1}
              header="Offshore Compamies"
              para="You can register an offshore company
              and open its bank account in Dubai.
              Your agent will help you along all the
              process"       
  
            />
            
         </div>


   {/* === VECTOR 6 === */}
 <img src={vector6} className={style.varalMain__vector6}/>

  {/* === VECTOR 8 === */}
  <img src={vector8} className={style.varalMain__vector8}/>

 {/* === VECTOR 7 === */}
 <img src={vector7} className={style.varalMain__vector7}/>

 {/* === VECTOR 9 === */}
 <img src={vector6} className={style.varalMain__vector9}/>

 {/* === VECTOR 10 === */}
 <img src={vector10} className={style.varalMain__vector10}/>

 {/* === VECTOR 11 === */}
 <img src={vector11} className={style.varalMain__vector11}/>

  {/* === VARAL FEATURES === */}
          
  {/* ===  SECTION BEFORE PRICE(DISABLE FOR DESKTOP) === */}
  <div className={style.varalMain__features__sectionBefore1}>
        <SectionBeforePrice 
            para="Learn the ways in which you can benefit 
                  from a UAE/Offshore Company. Then get 
                  started on fulfilling your UAE dream."
            linkPara="Claim a Free Quote"
            vector={white}
        />
  </div>
  <div className={style.varalMain__features}>
            
    {/* === FIRST COLUMN == */}
    <div className={style.varalMain__features__column1}>

     {/* === SECTION BEFORE PRICE === */}
        <div className={style.varalMain__features__column1__first}>
            <SectionBeforePrice 
              para="Learn the ways in which you can benefit 
                    from a UAE/Offshore Company. Then get 
                    started on fulfilling your UAE dream."
              linkPara="Claim a Free Quote"
            />
        </div>
            <Section6
              image={illustration1}
              header="Bank Account Setup"
              para="There are many banks in the United
                    Arab Emirates [UAE]. Both locally
                    owned and branches of
                    multinational ones. Foreign banks
                    adjust according to their parent s
                    strategies and have changed local
                    requirements overnight in the past.
                    But we are here to help you."
            />

    {/* === SECTION 6 === */}
  <div className={style.varalMain__features__column1__third}>           
           <Section6  
              image={group2}
              header="UAE Company Visas"
              para="Your application for visas is critical
                    especially if you intend to move to
                    Dubai. This becomes even more
                    urgent if your family will also move
                    with you. All the paperwork is done
                    on your behalf smoothly so that you
                    may only focus on doing what
                    matters most to you."
          />
  </div>
  </div>
           
  {/* === COLUMN 2 SECTION 6 === */}
  <div className={style.varalMain__features__column2}>
   {/* ===  COLUMN 2 SECTION 6 1 === */}
       <Section6
          image={group}
          header="Advice & Guidance"
          para="All activities in the UAE are licensed. 
              Whether manufacturing, finance, 
              trading, marketing, consultancy or 
              restaurants. In some countries only 
              manufacturing is licensed. In others 
              there is a threshold below which 
              business are encouraged. Get our 
              insightfull guidance today."
        />


    {/* === COLUMN 2 SECTION 6 2 === */}
  <div className={style.varalMain__features__column2__second}>
        <Section6
          image={group1}
          header="Registration Document Perparation"
          para="Several documents must be
               prepared to start the process of
               registering a new company in the
               United Arab Emirates. Be it a Dubai
               local company, a free zone one or an
               offshore entity. Your registered
               agent is dedicated to get this done
               for you for a seamless process."
        />
  </div>
  </div>
  </div>

  {/* === MORE ABOUT SRVICE ===  */}
  <div className={style.varalMain__moreAboutServices}>

        <SectionBeforePrice1
          para="We have gathered a team of
                professionals to craft adequate
                services you can rely on for a friction
                free setup in UAE."
          linkPara="More about our services"
          vector={arrowRight}
        />
</div>

        
        
{/* === SECTION 7 === */}
            
{/* === DOT VECTOT 13 === */}
{/* === VECTOR 13 === */}
<img src={vector12} className={style.varalMain__vector13}/>

{/* === VECTOR 14 === */}
<img src={vector14} className={style.varalMain__vector14}/>
{/* === VECTOR 15 === */}
<img src={vector11} className={style.varalMain__vector15}/>
        
<div className={style.varalMain__section7}>
        <Section7/>
</div>

{/* === SECTION 8 (PRICE CARDS) === */}
<div className={style.varalMain__section8}>
        <Section8          
            header="AJMAN OFFSHORE"
            subHeader="Ajman Offshore New Company formation includes"
            price="2,997"          
        />
        <Section8          
            header="RAK ICC"
            subHeader="Rak Icc New Company formation includes"
            price="2,997"          
        />
        <Section8          
            header="SHARJAH MEDIA CITY"
            subHeader="Sharjah Media City New Company formation include"
            price="4,124"          
        />
 </div>
 <div className={style.varalMain__priceList}>
        <PriceList/>
  </div>
 {/* === RIGHT HALF CIRCLE === */}
 <div className={style.varalMain__halfCircleVector}>
        <img src={group100}/>
  </div>

{/* === DOT VECTORS === */}
  {/* === DOT VECTORS 16 === */}
  <img src={vector16} className={style.varalMain__vector16}/>
  {/* === DOT VECTORS 17 === */}
  <img src={vector17} className={style.varalMain__vector17}/>
  {/* === DOT VECTORS 18 === */}
  <img src={vector16} className={style.varalMain__vector18}/>
  {/* === DOT VECTORS 19 === */}
  <img src={vector19} className={style.varalMain__vector19}/>
  {/* === DOT VECTORS 20 === */}
  <img src={vector16} className={style.varalMain__vector20}/>
  {/* === DOT VECTORS 21 === */}
  <img src={vector19} className={style.varalMain__vector21}/>

{/* === SECTION 9 === */}
<div className={style.varalMain__section9}>
   <div >
      <Section9
        header="Read about our blogs for more information on our processes"
      /><br></br>
      <Section10
        header="How to start a company formation in Dubai"
      /><br></br>
      <Section10
        header="How to start an Offshore 
                company formation in Dubai"
      /><br></br>
     <div className={style.varalMain__section9__fourth}>
      <Section10
        header="EO Dubai: Who benefits the most?"
      />
     </div><br></br>
      <Section9
        header="Satidfied We are When Our Customers Are Happy"
      /><br></br><br></br>

{/* === FEEDBACK ==== */}
<Feedback
   para="I am very happy with them. I’ll 
         continue to use their services in 
         future & highly recommend them 
         to anyone,"
   author="Muhib Abrar"
/>
<Feedback
   para="Rama has a high level of integrity,
         intellect, knowledge of his
         business, resourcefulness and
         humanity,"
   author="Colin Saldahna"
/>
<Feedback
   para="Your advise was so complete that I
         actually realized how beneficial
         this would be to my clients and my
         business."
   author="Mark Swann"
/>
 </div>
<div className={style.varalMain__section9__second}>
  <Section9
    header="Get to know the whole us and more of our services"
  /><br></br>

  <Section11
    header="Services"
    list={list1}
  /> 
  <Section11
    header="Policy"
    list={list2}
  /> 
<Section11
    header="About"
    list={list3}
/> <br></br><br></br>
<Address/><br></br><br></br>
<Subscribe/><br></br>
<SocialMedia/>          
</div>       
</div>

{/* === FOR MOBILE VIEW ONLY === */}
<div className={style.varalMain__serviceAddress}>
<div>
  <Section11
     header="Services"
     list={list1}
/> 
  <Section11
     header="About"
     list={list3}
   /><br></br>
   <Subscribe/>
   </div>
<div>
   <Section11
      header="Policies"
      list={list2}
   /> <br></br>
<Address/><br></br>
<SocialMedia/>          
</div>
</div>

{/* === FOOTER === */}
 <div className={style.varalMain__footer}>
      <p>Varaluae 2021 &copy; All Right Reserved</p>
</div>
</div>
 </>
    )
}
export default VaralHome