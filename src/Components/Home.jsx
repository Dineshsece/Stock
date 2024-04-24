import img1 from "./images/img1.avif"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.avif"
//import logo from "./images/logo.jpg"

import { Link } from "react-router-dom"


function Home(){
   
       return( 
        <>
       <nav class="navbar">
       <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/Workspace">Workspace</Link></li>
           <li><Link to="/Aboutus">About Us</Link></li>
           <li><Link to="/Contact">Contact</Link></li>
       </ul>
   </nav>

    <div className = "about">
    <h2>Disclaimer</h2>
    <p>We are  not a professional stock analyst or financial advisor. Any information provided is for educational and informational purposes only and should not be construed as financial advice. Investing in the stock market involves risks, including the potential loss of principal. All investment decisions and actions are taken at your own risk. It is recommended to consult with a qualified financial advisor or conduct thorough research before making any investment decisions.</p>
    </div>
   
    <h2>Inspiration</h2>
   <div className="image">
    <div class = "img1">
    <img src={img1} width={"300px"}></img>
    <p>"The key to successful investing is to identify businesses with a long runway for growth"</p>
    </div>

    <div class = "img2">
    <img src={img2} width={"300px"}></img>
    <p> "Be fearful when others are greedy and greedy when others are fearful"</p>
    </div>

    <div class = "img3">
    <img src={img3} width={"300px"}></img>
    <p> </p>
    <p>"Don't be afraid to take calculated risks. The biggest risk is not taking any risk at all"</p>
    </div>

    </div>

   

    <div class = "contact">
        <h2>Contact us</h2>
        <p>StockGeeks@gmail.com</p>
    </div>
    </>
       )

   
}

export default Home