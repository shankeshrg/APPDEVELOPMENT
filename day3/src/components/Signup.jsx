import * as React from 'react'

const Signup = () => {

const [formdata, SetFormData]=React.useState({
            
    Firstname:"",
    Lastname:"",
    Email:"",
    Password:"",
    Confirm_Password:"",

})

const handleonChange = (e) =>{
    const [name, value] =[e.target.name, e.target.value];
    SetFormData({
       ...formdata,
       [name]: value
    })  
    
}

const SubmitForm = (e) =>{
    e.preventDefault();
    console.log(formdata);
}

  return (
    <div class="center">
        <h1>SIGNUP</h1>
        <form method='post' action='' onSubmit={SubmitForm} >
            <div class="txt_field">
             <input type='text' id='Firstname' placeholder='first name' onChange={handleonChange}></input>
             <span></span>
                
            </div>
            <div class="txt_field">
             <input type='text' id='Lastname' placeholder='last name' onChange={handleonChange}></input>
             <span></span>
             
            </div>
            <div class="txt_field">
             <input type='text' id='Email' placeholder='email' onChange={handleonChange}></input>
             <span></span>
             </div>
            <div class="txt_field">
             <input type='Password' id='Password' placeholder='password'  onChange={handleonChange}></input>
             <span></span>
             
             <input type='Password' id='Confirm password' placeholder='confirm password' onChange={handleonChange}></input>
             <span></span>
             </div>
            
            <div class="pass">Forgot Password?</div><br/>
             <input type='submit' value="Signup"></input>
             <div class="sign_up">
                Not a user? <a href="#">Signup</a>
             </div>
        </form>
    </div>
        
        
  )
}

export default Signup