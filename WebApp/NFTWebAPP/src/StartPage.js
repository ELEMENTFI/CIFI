import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const StartPage=()=>{


    return(



        <div>
            <center>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <Link to="/app">
            <button type='button'>?using Gmail</button>

            </Link>


            <br></br>
            <br></br>

            <Link to="/app">
            <button type='button'>?using Mobile_Number</button>

            </Link>


</center>
            {/* <h1 style={{color:'white'}}>Hello</h1> */}

            </div>
    )
}

export default StartPage;