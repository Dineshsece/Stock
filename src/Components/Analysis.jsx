import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom"

function Analysis() {
  const container = useRef();
  const [scriptAppended, setScriptAppended] = useState(false);

  useEffect(() => {
    if (!scriptAppended) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NSE:NIFTY",
          "timezone": "Asia/Kolkata",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": true,
          "withdateranges": true,
          "range": "YTD",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
      setScriptAppended(true);
    }
  }, [scriptAppended]);

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
    <div style={{ height: "100vh", width: "100%" }}>
      <div style={{ height: "100%", width: "100%" }}>
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
          <div className="tradingview-widget-container__widget" style={{ height: "1%", width: "1%" }}></div>
          {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Analysis;

