import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
const Players = ({match}) => {

   
     return ( 
        <div className="workout-details">
        <h3>Name: {match.players[0].name}</h3>
        <img src={match.players[0].img} alt="" />
      </div>
     );
}
 
export default Players;