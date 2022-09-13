import { useEffect, useState } from 'react';
const LiveScore = ({match}) => {

   
     return ( 
        <div className="workout-details">
     
       
        <h3> <img src={match.teamInfo[0].img} width="100" alt="" /><strong>{match.teams[0]} VS {match.teams[1]} <img src={match.teamInfo[1].img} width="100" alt="" /></strong></h3>
        <h7><strong>Match Type: </strong>{match.matchType}</h7>

        <h5 style={{color:"red"}}><strong>Status : </strong>{match.status}</h5>
      </div>
     );
}
 
export default LiveScore;