import { Link } from "react-router-dom"

function Knowledge(){
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
        <div className="knowledge"style={{ height: "100vh", width: "92%",marginLeft:"140px" }}>
        <h1>Knowledge</h1>
        <h2>understand the difference:</h2>
        <p><b>Investing:</b> Think of it like buying a house. You wouldn't buy a house based on its hourly price swings; you'd consider its location, condition, and long-term value. Similarly, investors buy stocks in companies they believe will grow over time, focusing on the company's fundamentals.</p>
        <p><b>Trading:</b> Think of it like buying and selling fruits in a seasonal market. You might buy apples when the price dips and sell them when the price rises slightly, aiming to profit from short-term fluctuations. Similarly, traders focus on technical indicators and short-term price movements to make quick profits.</p>
        <h2>Choosing between Investing and Trading:</h2>
        <p>The best approach for you depends on your individual circumstances, risk tolerance, and financial goals.</p>
        <p><b>Investors:</b> If you have a long-term horizon, are comfortable with lower risk, and prefer a more passive approach, investing might be a good fit.</p>
        <p><b>Traders:</b> If you have a high-risk tolerance, enjoy active management, and can handle the fast-paced nature of the market, trading could be an option.</p>
        <p>It's important to remember that trading is generally considered a riskier proposition compared to long-term investing.  Many new entrants to the market lose money through trading due to the inherent volatility and the emotional challenges involved.</p>
        </div>

        </>
    )
}

export default Knowledge