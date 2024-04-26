import React from 'react';
import { Link } from 'react-router-dom';
import './Tools.css';
import tool from './images/tool.jpeg'
import tool1 from './images/tool1.jpeg'

// Tools Page

function Tools() {
    return (
        <div className="tools-container" style={{backgroundImage:`url(${tool})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
            {/* Navigation Sidebar */}
            <nav className="navbar1">
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

            {/* Main Content */}
            <div className="tools-content">
               <div className='tooltitle'>
                <h1 >Tools</h1>
                </div>

                {/* Fundamental Analysis Section */}
                <div className="section">
                    <h2>For Fundamental Analysis:</h2>
                    <p>
                        Fundamental analysis in the stock market is like examining the health of a company to decide if its stock is a good investment. It involves looking at things like the company's earnings, revenues, assets, and growth prospects to figure out if the stock is priced right.
                    </p>
                    <div className="card">
                        <img src="https://example.com/investopedia.png" alt="Investopedia" />
                        <div className="card-content">
                            <a href="https://www.investopedia.com/"><b>Investopedia</b></a>: Investopedia is a comprehensive website offering educational content on various financial topics, including fundamental analysis.
                        </div>
                    </div>
                    {/* Add other cards here */}
                </div>

                {/* Technical Analysis Section */}
                <div className="section">
                    <h2>For Technical Analysis:</h2>
                    <p>
                        Technical analysis involves reading signs and patterns in stock price charts to predict future price movements.
                    </p>
                    <div className="card">
                        <img src="https://example.com/tradingview.png" alt="TradingView" />
                        <div className="card-content">
                            <a href="https://www.tradingview.com/"><b>TradingView</b></a>: TradingView offers advanced charting tools and technical indicators.
                        </div>
                    </div>
                    {/* Add other cards here */}
                </div>

                {/* General Finance Websites Section */}
                <div className="section">
                    <h2>General Finance Websites:</h2>
                    <p>
                        Explore MoneyControl and Finance Time for news, analysis, and financial data.
                    </p>
                    <div className="card">
                        <img src="https://example.com/moneycontrol.png" alt="MoneyControl" />
                        <div className="card-content">
                            <a href="https://www.moneycontrol.com/"><b>MoneyControl</b></a>: Moneycontrol is a popular Indian financial website.
                        </div>
                    </div>
                    {/* Add other cards here */}
                </div>
            </div>
        </div>
    );
}

export default Tools;
