import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpeg"
import img3 from "./images/img3.webp"
import img4 from "./images/img4.jpeg"
//import logo from "./images/logo.jpg"


import { Link } from "react-router-dom"



function Home(){
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1 ,
        slidesToScroll: 1,
      };
   
       return( 
        <>
       <nav className="navbar">
       <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/Workspace">Workspace</Link></li>
           {/* <li><Link to="/Aboutus">About Us</Link></li> */}
           <li><Link to="/Contact">Contact</Link></li>
       </ul>
   </nav>

    <div className = "about">
    <h2>Disclaimer</h2>
    <p>We are  not a professional stock analyst or financial advisor. Any information provided is for educational and informational purposes only and should not be construed as financial advice. Investing in the stock market involves risks, including the potential loss of principal. All investment decisions and actions are taken at your own risk. It is recommended to consult with a qualified financial advisor or conduct thorough research before making any investment decisions.</p>
    </div>
   <div className="about">
    <h2>Inspiration</h2>
   <div className="sidediv">
     <Slider {...settings}>

   
    <div className = "img">
        <div className="align">
    <div><img src={img1} width={"300px"} ></img>
    <p className="name">Warren Buffett</p></div>
    <div><p className="text">Warren Buffett, often hailed as the "Oracle of Omaha," has left an indelible mark on the world of investing. His timeless wisdom and investment philosophy have inspired generations of investors. With iconic quotes like "Be fearful when others are greedy and greedy when others are fearful," Buffett encourages a contrarian approach to investing that emphasizes long-term value over short-term fluctuations. His emphasis on diligent research and a deep understanding of the businesses he invests in has shaped his success, as seen in his significant investments in companies like Coca-Cola, American Express, and Apple. Warren Buffett's commitment to philanthropy and responsible wealth management further exemplifies his impactful legacy, making him a beacon of inspiration for those seeking enduring principles in the stock market.</p>
    </div></div></div>

    <div className = "img">
        <div className="align">
    <div><img src={img4} width={"300px"} ></img>
    <p className="name">Harshad maetha</p></div>
    <div><p className="text"> Harshad Mehta was a prominent figure in the Indian stock market known for his revolutionary yet controversial approach to trading. He famously remarked, "In the stock market, the only thing that is for certain is uncertainty." Mehta's career was marked by bold strategies and a charismatic persona. His ability to identify undervalued stocks and manipulate the market earned him both admiration and scrutiny. Mehta famously said, "Risk hai toh ishq hai," reflecting his belief in taking calculated risks in the pursuit of success. Despite his eventual fall from grace due to involvement in financial irregularities, his legacy remains a source of fascination and intrigue in the world of finance. Harshad Mehta's story serves as a cautionary tale about the pitfalls of unchecked ambition and the allure of the stock market.</p>
    </div></div></div>

    <div className = "img">
    <div className="align">
    <div><img src={img2} width={"300px"} ></img>
    <p className="name">Peter Lynch</p></div>
    <div><p className="text">Peter Lynch, a legend in the world of finance, is renowned for his successful tenure as the manager of the Magellan Fund at Fidelity Investments. Lynch's investment philosophy centered around investing in what you know and understanding the businesses you invest in. His mantra of "buy what you know" resonates with investors seeking to identify opportunities in familiar industries. Lynch's stock-picking prowess and ability to communicate complex concepts in a simple manner made him a beloved figure among individual investors. With a track record of picking winning stocks like Dunkin' Brands and Taco Bell, Lynch's approach emphasized sound fundamental analysis and a long-term investment horizon. His profound impact on the investing world continues to inspire individuals looking to navigate the stock market with confidence and savvy decision-making.</p>
    </div></div>
    </div>

    <div className = "img">
    <div className="align">
    <div><img src={img3} width={"300px"} ></img>
    <p className="name">George Soros</p></div>
    <div><p className="text">George Soros, a renowned investor and philanthropist, has left a lasting impact on the financial world. Known for his reflexivity theory, Soros emphasizes the influence of investor behavior on market dynamics. His success stories include profitable currency bets like against the British pound, showcasing his ability to navigate volatile markets. With quotes like "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong," Soros underscores the importance of risk management in investing. His philanthropic efforts through the Open Society Foundations highlight his commitment to social justice and democracy. George Soros's legacy in finance and advocacy continues to inspire individuals seeking a multidimensional approach to investing.</p>
    </div></div>
    </div>

   
     
    </Slider>
    </div>
    </div>

   

    <div class = "about">
        <h2>Contact us</h2>
        <p>StockGeeks@gmail.com</p>
        <a href="https://chat.whatsapp.com/ESY58eWFaKG817hxnJeiDL"><i class="bi bi-whatsapp"></i>Whatsapp</a>   </div>
    </>
       )

   
}

export default Home