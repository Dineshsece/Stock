
import React, { useEffect, useRef, memo } from 'react';
import { Link } from 'react-router-dom';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NSE:HDFCBANK",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "1",
          "locale": "in",
          "enable_publishing": true,
          "withdateranges": true,
          "range": "12M",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": false,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
<>
    
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
<div style={{ height: "100vh", width: "92%",marginLeft:"120px" }}>
  <div style={{ height: "100%", width: "100%" }}>
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "1%", width: "1%" }}></div>
      {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
    </div>
  </div>
</div></>
  );
}

export default memo(TradingViewWidget);
