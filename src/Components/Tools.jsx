import { Link } from "react-router-dom"

function Tools(){
    return(
    <>
     
    <nav class="navbar1">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Tools">Tools</Link></li>
        <li><Link to="/Stock">Stock</Link></li>
        <li><Link to="/Analysis">Analysis</Link></li>
        <li><Link to="/Guide">Guide</Link></li>
        <li><Link to="/Knowledge">Knowledge</Link></li>
    </ul>
</nav>
<h1>Tools </h1>
</>
    )
}

export default Tools