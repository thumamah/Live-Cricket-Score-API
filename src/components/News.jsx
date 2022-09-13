import { useState } from "react";
import { useEffect } from "react";
const News = ({match}) => {
    
    return ( 
        <div className="workout-details">
        <h4><strong>Team: </strong>{match.teamInfo[0].name}({match.teamInfo[0].shortname})</h4>
        
        <img src={match.teamInfo[0].img} width="100" alt="" />

       {/* <p><strong>Match Type: </strong>{match.matchType}</p>

       <p><strong>{match.teams[0]} VS {match.teams[1]}</strong></p>
       <p></p> */}
     </div>
     );
}
 
export default News;