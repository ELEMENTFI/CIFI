import { useState } from "react";

const PoolCardTabs = () => {
    let [active, setActive] = useState("Pool Statistics");
    return (<div  >
        <center><div onClick={e => setActive("Pool Statistics")} className={`pool-card-tab ${active == "Pool Statistics" ? "active" : ""}`}>
          <b>  Pool Statistics</b>
        </div></center>
       
    </div>
    );
}

export default PoolCardTabs;