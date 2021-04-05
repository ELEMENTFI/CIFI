import React,{useState} from "react";
import history from "./utils/history";
import ReactPlayer from "react-player";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Howitworkpage() {

    const handle = useFullScreenHandle();
  const [name,setName] = useState("ramachandran");


  const callBtn = () =>{

    setName("Pragadesh");

    alert(name);

    
    }


  return (
    <div>

<center>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=dA1lXZhWPoQ"
        
/>

<FullScreen handle={handle}>
        Any fullscreen content here
      </FullScreen>

</center>
      </div>
  )
}

export default Howitworkpage;
