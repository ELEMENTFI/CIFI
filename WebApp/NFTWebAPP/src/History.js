import React, { useState,useEffect } from 'react';
import axios from 'axios';
const History=()=>{


const [bookss, setBookss] = useState(null);

//const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

    const apiURL = "https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0xdbb163b22e839a26d2a5011841cb4430019020f9&page=1&offset=10&sort=asc&apikey=9EFYVV4BAJS2M3M3ADUFN8G8XTCTAMR7R9";

    

    const fetchData = async () => {
        //const response = await axios.get(apiURL)

        axios.get(`${apiURL}`)
        .then((response)=>{
          const allNotes=response.data.result;
          setBookss(allNotes)
        }).catch(error => console.error(`Error: ${error}`));

    };

    useEffect(()=>{fetchData()},[bookss])  

    console.log("getbbb",bookss)

    return (
      
<div>

      { <div className="books">
        {bookss &&
          bookss.map((book) => {
            
            return (
          
              <div className="details">
                  <p style={{color:'white'}}> {book.to}</p>
                  <p style={{color:'white'}}> {book.tokenID}</p>
                  {/* <p style={{color:'white'}}>🏘️: {book.country}</p>
                  <p style={{color:'white'}}>⏰: {cleanedDate}</p> */}
                </div>
            );
          })}
      </div>
 }

</div>
);
}
export default History;