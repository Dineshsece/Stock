import { Link } from "react-router-dom"

function Stock(){
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
        <div className="stockname" style={{marginLeft:"130px"}}>
        <h1>Stock</h1>
    
      <h1>Stock Performance Analysis</h1>
      <table >
        <thead>
          <tr>
            <th>Sector</th>
            <th>Stock Name</th>
        
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Conglomerate</td>
            <td>Reliance Industries Limited (RELIANCE)</td>
          </tr>
          <tr>
            <td>Information Technology </td>
            <td>Infosys Limited <br/>(INFY)
               Tata Consultancy Services Limited <br />(TCS)
               Wipro Limited <br />(WIPRO)</td>
          </tr>
          <tr>
            <td></td>
            <td>Reliance Industries Limited (RELIANCE)</td>
          </tr>
       
        </tbody>
      </table>
      </div>





        </>
    )
}

export default Stock