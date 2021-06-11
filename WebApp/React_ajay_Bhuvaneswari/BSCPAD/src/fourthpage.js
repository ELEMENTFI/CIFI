import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fireDB from'./firebase';
class fourthpage extends React.Component {
  constructor(props) {
      
      super(props);
     
      this.state = {Con : []}
      }
      componentDidMount() {
   
        fireDB.database().ref(" ").on("value", snapshot => {
          let Con = [];
          snapshot.forEach(snap => {
              // snap.val() is the dictionary with all your keys/values from the 'students-list' path
              Con.push(snap.val());
          });
          this.setState({ : Con });
        });
      
      
   }
    
    render(){
    return (
      <div className="MainDiv"> 
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>
   
        <div class="jumbotron text-center ">
            <h3>Printing data from Firebase</h3>
        </div>
        <div className="container">   
        
        <div className='row'> 
        <div className='col-xl-12'>
        { this.state..map(data => 
            <div className="card float-left bg-sky text-dark" style={{width: '18rem', marginRight: '1rem', marginBlockStart: '1rem' }}>
              <div className="card-body">
                <h6 className="card-title">At : { data.At }</h6>
                <h6 className="card-text">Balance : { data.Balance }</h6>
                <h6 className="card-text">Decimal : { data.Decimal }</h6>
                <h6 className="card-text">Name : { data.Name }</h6>
                <h6 className="card-text">No : { data.No }</h6>
                <h6 className="card-text">Symbol : { data.Symbol }</h6>
                <h6 className="card-text">Total Supply : { data.ggg }</h6>
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
