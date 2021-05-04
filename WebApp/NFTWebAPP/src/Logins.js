import React,{useState} from 'react';
import {GoogleLogin} from 'react-google-login';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Logins=(props)=>{

    


    // const[SignInM,setSignInM]=useState();

    const {email,setEmail,password,setPassword,handleLogin,handleSignup,
        hasAccount,setHasAccount,emailError,passwordError,phoneAuth,phoneNumber,setPhoneNumber,passwordPhone,setpasswordPhone,phoneAuthLogin,hasAccountO,setHasAccountO}=props;


        const responseGoogle=(response)=>{
            
            console.log("getlogin",response);
            console.log("getlogin",response.gt.Rt);
            //this place setEmail
            
        }


        
        
    

    return(

        


<section className="login">
<div className="loginContainer" style={{backgroundColor:'white',height:'600px',width:'700px'}}>


<center>
<h4 style={{color:'black'}}>User Login/Signup</h4>
</center>
    

{/* <div>
<button type="button" onClick={setSignInM(true)} style={{width:'210px'}}>sign-in with Email</button>
<br></br>
<br></br>
<button type="button" onClick={setSignInM(false)} style={{width:'210px'}}>sign-in with Mobile-Number</button> */}


{/* </div> */}

{/* {SignInM?( */}

<div style={{float:'left',marginLeft:'50px'}}>

    <br></br>
    <br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>


    

<label>Email-Id        </label>
<input type="text" placeholder="email-id" autoFocus required value={email} onChange={(e)=>
setEmail(e.target.value)}/>
<p className="errorMsg">{emailError}</p>
<label>Password  </label>
<input type="password" placeholder="password" autoFocus required value={password} onChange={(e)=>
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
             )}
</div>


</div>
    {/* ):( */}

    {/* <div style={{borderleft:'6px',height:'500px'}}>


    

        </div> */}

<div  style={{float:'right',marginTop:'150px',marginRight:'50px'}}>
<div style={{backgroundColor:'white',height:'20px'}} >



<input type="text" placeholder="Mobile Number" autoFocus required value={phoneNumber} onChange={(e)=>
setPhoneNumber
(e.target.value)}/>

      <br></br>
      <br></br>

      <input type="text" placeholder="password" autoFocus required value={passwordPhone} onChange={(e)=>
setpasswordPhone
(e.target.value)}/>

<br></br>
      <br></br>


      <div className="btnContainers">

{
    hasAccountO ? (

        <>
        <button onClick={phoneAuthLogin}>Sign in</button>
        <p>Don't have an account ? <span onClick={()=> setHasAccountO(!hasAccountO)}> Sign Up</span></p>
        </>


    ) : (

        <>
        <button onClick={phoneAuth}>Sign Up</button>
        <p>Have an account ? <span onClick={()=> setHasAccountO(!hasAccountO)}> Sign in</span></p>
        </>
         )}
</div>



      {/* <button type="button" onClick={phoneAuth}>GetOtp</button> */}
        

</div>
      </div>
    {/* )}       */}



    </div>
</section>


    );

}

export default Logins;



