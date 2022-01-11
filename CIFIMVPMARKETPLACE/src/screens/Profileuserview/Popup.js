import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box" >
      <div className="box" style={{width:"300px",height:"200px"}}>
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;