import React,{useState} from "react";
import history from "./utils/history";

function First() {

  const [name,setName] = useState("ramachandran");


  const callBtn = () =>{

    setName("Pragadesh");

    alert(name);

    
    }


  return (
    <>

      <div class="display-4 mb-1">This is the First Route</div>
<h1>
  { name}
</h1>

      <button
        class="btn btn-info btn-block"
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        Root
      </button>
      <button
        class="btn btn-info btn-block"
        type="button"
        onClick={() => {
          history.push("/second");
        }}
      >
        Second
      </button>



      <button
        class="btn btn-info btn-block"
        type="button"
        onClick= {callBtn}>
        Third
      </button>

    </>

  );
}

export default First;
