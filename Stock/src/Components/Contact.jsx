import React, { useState } from 'react';
import axios from 'axios'; 
import { Link } from "react-router-dom"
import './contact.css'
const UserForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [doubt, setdoubt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:3000/signup", {  username,email ,doubt});
      setMessage(response.data.message);
      setEmail('');
      setUsername('');
    } catch (error) {
      setMessage('An error occurred while saving user data.');
      console.error(error);
    }
  };

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


   <div className="user-form-container" style={{marginLeft:"130px"}}>
 <div className='title'>
 <h2>User Registration Form</h2>

   <form onSubmit={handleSubmit} className="user-form">
     <div className="form-group">
       <label>Email:</label>
       <input
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
         className="form-control"
       />
     </div>
     <div className="form-group">
       <label>Username:</label>
       <input
         type="text"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         required
         className="form-control"
       />
     </div>
     <div className="form-group">
       <label>Your Doubts</label>
       <input
         type='textarea'
         value={doubt}
         onChange={(e) => setdoubt(e.target.value)}
         required
         className="form-control"
       />
     </div>
     <button type="submit" className="submit-btn">Submit</button>
   </form>
   {message && <p className="message">{message}</p>}
   </div>
 </div></>
  );
};

export default UserForm;
