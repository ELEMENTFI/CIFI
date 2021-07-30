import React from 'react';
import './App.css';
//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';
import fireDB from'./firebase';
//import { data } from 'jquery';
import { Card } from 'react-bootstrap';
class fourthpage extends React.Component {
  constructor(props) {
      
      super(props);
     
      this.state = {Con : []};
      //this.state = {Con1: []};
      }
      componentDidMount() {
   
   
      
      fireDB.database().ref("Con").orderByChild("No").equalTo(1).on("value", snapshot => {
       let Con = [];
       snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            Con.push(snap.val());
        });
      this.setState({ Con: Con });
     });  
      
     /*fireDB.database().ref("Con").orderByChild("No").equalTo(2).on("value", snapshot => {
       let Con1 = [];
       snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            Con1.push(snap.val());
        });
      this.setState({ Con: Con1 });
     }); */ 
      
 }
 
  
    
 render(){
  return (
    <div className="" style={{backgroundColor:"white"}}> 
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

    
      <div class="text-center">
      <h2 class="head1"><b>History</b></h2>
      </div>
      <div className="container">   
      
      <div className='row'> 
      
      <div className='col-xl-12'>
       <h3 style={{color:"black"}}>  Upcoming pools</h3><br></br> 
      <Card class="mt-2  shadow" style={{ width: '25rem' , padding: "30px",backgroundColor:" #f2f2f2",color:"black"}}  >
         <p id="demo1" style={{textAlign:"right" ,color:"orange"}}>Starts in</p>
      <p id="demo" style={{textAlign:"right" ,color:"orange"}}></p>
  <h4 id ="1name">

  </h4>
  <p>
    Total Supply:
  </p>
  <h4 id ="1ts"> </h4>
  <div class="row">
    <div class="col">
      <h6>Min.Allocation<br/>1</h6>
    </div>
    <div class="col">
      <h6>Max.Allocation<br/>5</h6>
    </div>
    <div class="col">
      <h6>Access<br/><h4>Slate</h4></h6>
    </div>
  </div>

</Card>
<br></br> 
      </div>

<div className='col-xl-12'>
       <h3 style={{color:"black"}}>Featured Pools</h3><br></br> 
       
     {this.state.Con.map(data => 
          <div className="card float-left bg-sky mt-2  shadow" style={{width: '25rem', marginRight: '2rem', marginBlockStart: '1rem', padding: "30px",backgroundColor:" #f2f2f2",color:"black"}} >
            <div className="card-body">
            <p  style={{textAlign:"right", color:"red"}}>Filled</p>
              <h4>Name</h4>
              <p>{ data.Name }</p>
              <h4>Total Supply</h4>
              <p>  { data.TotalSupply }</p>
              <h4>Available Tokens</h4>
              <p>  { data.At }</p>
              <progress id="main7" value="5" max="5" class="progress11"></progress>
  <div class="row">
  <div class="col-4">
    100%
  </div>
  <div class="col-8">
    No.of Participants:<br/>5
  </div>
</div>
              </div> 
          </div> 
          )
      }
      
      </div> 


    </div> 
     </div>
    </div>
  );
}
}
export default fourthpage;
  
  
  
  



 


