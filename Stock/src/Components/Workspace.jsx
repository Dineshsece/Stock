import React from 'react';
import { Link } from 'react-router-dom';
import './Workspace.css';
import stock1 from '../assets/stock1.mp4';
import stock2 from '../assets/stock2.mp4';
import stock3 from '../assets/stock3.mp4';
import stock4 from '../assets/stock4.mp4';
import stock5 from '../assets/stock5.mp4';
import stock6 from '../assets/stock6.mp4'
import stock7 from '../assets/stock7.mp4';
import stock8 from '../assets/stock8.mp4';
import stock9 from '../assets/stock9.mp4';
import stock10 from '../assets/stock10.mp4';

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
    <div className="video-container">
      <h2>Tutorials</h2>
      <div className="videos">
        <div className="video">
          <video src={stock1} controls width="400">
           
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video">
        <video src={stock2} controls width="400"> 
           
            Your browser does not support the video tag.
          </video>
          
        </div>
        <div className="video">
         
            <video src={stock3} controls width="400"> Your browser does not support the video tag.</video>
           
         
          
        </div><div className="video">
         
            <video src={stock4} controls width="400"> Your browser does not support the video tag.</video>
           
          
          
        </div>
        <div className="video">
         
            <video src={stock5} controls width="400">   Your browser does not support the video tag.
         </video>
         
          
        </div>
        <div className="video">
         
            <video src={stock6} controls width="400">Your browser does not support the video tag.</video>
            
        
          
        </div>
        <div className="video">
         
            <video src={stock7} controls width="400"> Your browser does not support the video tag.</video>
           
          
          
        </div>
      <div className="video">
         
            <video src={stock8} controls width="400">Your browser does not support the video tag.</video>
            
          
          
        </div>
        <div className="video">
         
            <video src={stock9} controls width="400">   Your browser does not support the video tag.</video>
         
          </div>
          <div className="video">
         
         <video src={stock10} controls width="400">Your browser does not support the video tag.</video>
         
       
       
     </div>
       
      </div>
    </div>


    </div>
    


    </>
        )
}

export default Workspace;