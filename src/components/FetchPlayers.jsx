import { useEffect } from "react";
import { useState } from "react";
import Players from './Players'
const FetchPlayers = () => {

    const [matches, setMatches] = useState([]);
    // const url = 'https://api.cricapi.com/v1/match_info?apikey=a1ac07f4-3202-4c8c-bc47-d651b2a74eac&id=da1fb815-6566-40d3-a9d1-2720fb941fa6';
    const url = 'https://api.cricapi.com/v1/match_squad?apikey=977ae3c4-78b0-46d7-80aa-129e095a72e4&id=c7c3deed-4460-468f-9fe3-c70e0facb700';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '3cf59040femshd2947127d1d9c37p14c727jsnbf1915e62996',
//     'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//   }
// };
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch(url)
	.then(res => res.json())
	.then(json =>  {
        setMatches(json.data)
        console.log(json.data)
        
        
    })
	.catch(err => console.error('error:' + err));
        }
        fetchWorkouts()
      }, [])
    return ( 
        <div className="App">
        {matches && matches.map((match) => (
        <Players match={match}>
        
        </Players>
        
        ))}   
        
</div>
     );
}
 
export default FetchPlayers;