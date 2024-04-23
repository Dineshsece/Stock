import { Link } from "react-router-dom"
function Guide() {
   return (
      <>
     
      <nav class="navbar">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Analysis">Analysis</Link></li>
          <li><Link to="/Guide">Guide</Link></li>
          <li><Link to="/Aboutus">About Us</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
      </ul>
  </nav>
  <h1>Guide </h1>
  </>
   )
}

export default Guide;