import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
const LiveScore = ({match}) => {

   
     return ( 
        <div className="workout-details">
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th colSpan={4}><h4>{match.inning}</h4></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Over</strong></td>
          <td><strong>Runs</strong></td>
          <td><strong>Wickets</strong></td>
        </tr>
        <tr>
          
          <td>{match.o}</td>
          <td>{match.r}</td>
          <td>{match.w}</td>
        </tr>
        
      </tbody>
    </Table>
      </div>
     );
}
 
export default LiveScore;