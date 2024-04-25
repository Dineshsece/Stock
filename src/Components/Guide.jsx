import { Link } from "react-router-dom"

function Guide(){
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
        <div className="Guide"  style={{ height: "100vh", width: "92%",marginLeft:"140px" }}>
        <h1>Guide</h1>
        <h2>Stock Selection and Analysis Page:</h2>
        <p>To analyze a stock for investment, there are several key methods and steps you can follow based on the information from the provided sources:
</p><br/>
        <h3>Stock Analysis Methods:</h3>
        <p><b>1. Technical Analysis :</b> Focuses on interpreting supply and demand dynamics through stock charts to make investment decisions.<br/>
<b>2. Qualitative Analysis :</b> Evaluates non-financial factors such as company leadership, product quality, and industry trends to assess investment potential.<br/>
<b>3. Quantitative Analysis: </b>Utilizes numerical data and statistical models to forecast stock price movements based on historical trends and patterns.<br/>
<b>4. Fundamental Analysis : </b> Examines a company's financial health, including revenue, earnings, and assets, to determine its intrinsic value and assess stock valuation.<br/>
</p><br/>
<h3>Steps to Research Stocks:</h3>
<p><b>1. Gather Stock Research Materials:</b> Begin by reviewing a company's financial documents, such as Form 10-K and Form 10-Q filed with the SEC, to understand its financial performance and position.<br/>
<b>2. Focus on Key Metrics:</b> Narrow down your focus to essential financial indicators like revenue, net income, and earnings per share to gain insights into the company's profitability and growth prospects.<br/>
</p><br/>
<h3>Additional Considerations:</h3>
<p><b>1. Annual Reports:</b> Delve into a company's annual report to gain comprehensive insights into its business operations, financial performance, and strategic outlook.<br/>
<b>2. Prospectus:</b> Examine the prospectus filed with the SEC by companies issuing shares to understand the details of the investment opportunity and associated risks.<br/>
<b>3. Stock Reports:</b> Access stock performance reports from reputable sources such as stock brokers or investment advisers to supplement your research and gain diverse perspectives.<br/>
</p><br/>
</div>
        </>
    )
}

export default Guide