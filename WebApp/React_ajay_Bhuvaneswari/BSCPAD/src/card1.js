import React from "react";
import { Card } from 'react-bootstrap';



function card(){








        return(
            <div>
                <Card class="mt-2  shadow" style={{ width: '25rem' , padding: "30px",backgroundColor:"gray",color:"black"}}  >

<div class="">
  <h4>
    Name:
  </h4>
  <p id ="name">

  </p>
  <h4>
    Symbol:
  </h4>
  <p id ="symbol">

  </p>
  <h4>
    Total Supply:
  </h4>
  <p id ="ts">

  </p>
  <h4>
    Balance
  </h4>
  <p id ="balance">

  </p>
</div>

</Card>
            </div>
        );
}
         export default card;