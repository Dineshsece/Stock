import { Link } from "react-router-dom"
function Workspace() {
    return(
        <>
         
        <nav class="navbar1">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Tools">Tools</Link></li>
            <li><Link to="/Brokers">Brokers</Link></li>
            <li><Link to="/Stock">Stock</Link></li>
            <li><Link to="/Analysis">Analysis</Link></li>
            <li><Link to="/Guide">Guide</Link></li>
            <li><Link to="/Knowledge">Knowledge</Link></li>
        </ul>
    </nav>
    <div style={{marginLeft:"150px"}}>
    <h1 >Workspace </h1>
    </div>
    </>
        )
}

export default Workspace;