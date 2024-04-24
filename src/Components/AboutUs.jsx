import { Link } from "react-router-dom";
function AboutUs(){
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
      <h1>About us</h1>
      </>
    )
}

export default AboutUs;