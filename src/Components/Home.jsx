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
    <h2>About the website</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti rerum, iste autem repellat quod illum harum! Voluptatum, obcaecati! Distinctio, perferendis ea ipsum cum exercitationem enim eveniet repellat! Dolorem, et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ut enim! Perferendis dolores officia voluptate delectus deserunt, adipisci eos, at voluptatibus voluptates sequi expedita minus soluta libero, optio et. Possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sequi dolorem, aliquam doloribus vel perspiciatis nulla pariatur aut, ducimus assumenda praesentium corporis exercitationem quibusdam natus dicta, hic totam ut delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus dolor repellat nulla reiciendis illo, illum ducimus quasi quos reprehenderit aspernatur cumque sint excepturi placeat consectetur eos iure ut enim.</p>
    </div>
    
    <div className = "inspiration">
    <h2>Inspiration</h2>

    <div class = "img1">
    <img src={img1}></img>
    <p>"The key to successful investing is to identify businesses with a long runway for growth"</p>
    </div>

    <div class = "img2">
    <img src={img2}></img>
    <p> "Be fearful when others are greedy and greedy when others are fearful"</p>
    </div>

    <div class = "img3">
    <img src={img3}></img>
    <p> </p>
    <p>"Don't be afraid to take calculated risks. The biggest risk is not taking any risk at all"</p>
    </div>

    </div>

    <div class = "contact">
        <h2>Contact us</h2>
        <p>Our email here</p>
    </div>
    </>
       )

   
}

export default Home