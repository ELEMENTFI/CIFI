import React,{useState} from 'react';
import {GoogleLogin} from 'react-google-login';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Logins=(props)=>{

    

        

    const {email,setEmail,password,setPassword,handleLogin,handleSignup,
        hasAccount,setHasAccount,emailError,passwordError,phoneAuth,phoneNumber,setPhoneNumber}=props;


        const responseGoogle=(response)=>{
            
            console.log("getlogin",response);
            console.log("getlogin",response.gt.Rt);
            //this place setEmail
            
        }


        
    

    return(


        <center>


        <section className="login">
<div className="loginContainer" style={{backgroundColor:'white',height:'600px',width:'500px'}}>



    <br></br>
    <br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>

    <h4 style={{color:'black'}}>User Login/Signup</h4>
    

<label>Email-Id        </label>
<input type="text" placeholder="enter email-id" autoFocus required value={email} onChange={(e)=>
setEmail(e.target.value)}/>
<p className="errorMsg">{emailError}</p>
<label>Password  </label>
<input type="password" placeholder="enter password" autoFocus required value={password} onChange={(e)=>
setPassword(e.target.value)}/>
<p className="errorMsg">{passwordError}</p>




<div className="btnContainer">

    {
        hasAccount ? (

            <>
            <button onClick={handleLogin}>Sign in</button>
            <p>Don't have an account ? <span onClick={()=> setHasAccount(!hasAccount)}> Sign Up</span></p>
            </>


        ) : (

            <>
            <button onClick={handleSignup}>Sign Up</button>
            <p>Have an account ? <span onClick={()=> setHasAccount(!hasAccount)}> Sign in</span></p>
            </>

        )

    }

</div>



<div id="recaptcha-container" style={{}}/>

<center>
<div style={{backgroundColor:'white',width:'220px',height:'20px'}} >


<label>Phone_Number        </label>

{/* <PhoneInput 
      placeholder="Enter phone number"
value={phoneNumber} onChange={(e)=>
setPhoneNumber(e.target.value)}
/> */}

<input type="text" placeholder="enter email-id" autoFocus required value={phoneNumber} onChange={(e)=>
setPhoneNumber
(e.target.value)}/>

      <br></br>

      <button type="button" onClick={phoneAuth}>GetOtp</button>
        

      </div>
      </center>






{/* <GoogleLogin 
clientId="842516165307-tgselej93rqplidfcdu6rttl1drdt8eu.apps.googleusercontent.com"
onSuccess={responseGoogle}
onFailure={responseGoogle}>    
</GoogleLogin> */}
    </div>
    
            </section>




            </center>




    );

}

export default Logins;