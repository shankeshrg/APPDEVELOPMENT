import React from 'react';
import ReactDOM from 'react-dom/client';
import Signup from './components/Signup';
import Login from './components/Login';
import './assets/css/Login.css'
import './assets/css/Signup.css'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default function RouteApp(){
    return(
      <div className='App'> 

        {/*</div>* <Router>
            <Routes>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="Login" element{<login/>}> />
                <Route path="Signup" element{<signup/>}> />
            </Routes>
    </Router> </Routes>*/}
        <Login/>
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);