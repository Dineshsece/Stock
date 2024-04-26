import { Link } from "react-router-dom"
import './Stock.css'

function Stock() {
  return (
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
      <div className="stockname" style={{ marginLeft: "140px" }}>
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
              <td>Infosys Limited <br />(INFY)
                Tata Consultancy Services Limited <br />(TCS)
                Wipro Limited <br />(WIPRO)</td>
            </tr>
            <tr>
              <td></td>
              <td>Reliance Industries Limited (RELIANCE)</td>
            </tr>

          </tbody>
        </table>
     
       <div>
      <h2>Company Data</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>EPS (TTM)</th>
            <th>P/E (TTM)</th>
            <th>P/B</th>
            <th>Dividend Yield</th>
            <th>Sales Growth (12M)</th>
            <th>Profit Growth (12M)</th>
            <th>EPS Growth (12M)</th>
            <th>ROE (TTM)</th>
            <th>ROCE (TTM)</th>
            <th>Free Cash Flow Payout Ratio</th>
            <th>Debt to Equity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reliance Industries Ltd.</td>
            <td>12.5</td>
            <td>22.3</td>
            <td>3.85</td>
            <td>1.20%</td>
            <td>8.70%</td>
            <td>15.40%</td>
            <td>12.80%</td>
            <td>20.10%</td>
            <td>18.90%</td>
            <td>72.30%</td>
            <td>0.48</td>
          </tr>
          <tr>
            <td>Infosys Ltd.</td>
            <td>8.2</td>
            <td>27</td>
            <td>5.1</td>
            <td>2.12%</td>
            <td>6.20%</td>
            <td>18.00%</td>
            <td>14.50%</td>
            <td>25.00%</td>
            <td>23.70%</td>
            <td>65.80%</td>
            <td>0.32</td>
          </tr>
          <tr>
            <td>HDFC Bank Ltd.</td>
            <td>7.85</td>
            <td>20.75</td>
            <td>4.2</td>
            <td>2.40%</td>
            <td>11.50%</td>
            <td>16.50%</td>
            <td>13.80%</td>
            <td>20.10%</td>
            <td>19.20%</td>
            <td>48.70%</td>
            <td>0.75</td>
          </tr>
          <tr>
            <td>ITC Ltd.</td>
            <td>6.3</td>
            <td>24.2</td>
            <td>7.8</td>
            <td>5.10%</td>
            <td>4.80%</td>
            <td>8.70%</td>
            <td>7.20%</td>
            <td>22.30%</td>
            <td>21.50%</td>
            <td>82.10%</td>
            <td>0.23</td>
          </tr>
          <tr>
            <td>Tata Motors Ltd.</td>
            <td>4.1</td>
            <td>18.3</td>
            <td>2.7</td>
            <td>0.85%</td>
            <td>-2.10%</td>
            <td>-5.80%</td>
            <td>-7.40%</td>
            <td>13.50%</td>
            <td>11.80%</td>
            <td>92.50%</td>
            <td>0.87</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>




    </>
  )
}

export default Stock