import React from 'react';
import { Link } from 'react-router-dom';
import './Workspace.css';
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
    </>
        )
}

export default Workspace;