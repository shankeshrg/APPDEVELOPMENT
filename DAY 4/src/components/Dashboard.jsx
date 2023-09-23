import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from './redux/UserSlice'





const Dashboard = () => {
 const user=useSelector(selectUser);
 const email=user.user && user.user.email?user.user.email:'Guest';

    
  return (
    <div>
            <header>
        <h1>E-Restaurant {email} Dashboard</h1>
       
    </header>
  
    <aside class="sidebar">
        <nav>
            <ul>
                <br/><br/><br/><br/><br/>
                <li><Link to="/dash">Dashboard</Link></li>
                <li><Link to="/order">Orders</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/desert">Deserts</Link></li>
                <li><Link to="/setting">Settings</Link></li>
            </ul>
        </nav>
    </aside>

    

    <footer>
        <p>&copy; 2023 E-Restaurant</p>
        
    </footer>
        
    </div>
          
  )
}

export default Dashboard