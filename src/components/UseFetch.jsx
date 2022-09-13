import { useEffect } from "react";
import { useState } from "react";
import News from "./News";
import Spinner from 'react-bootstrap/Spinner';
const UseFetch = () => {

    const [matches, setMatches] = useState([]);
    const [isPending, setIsPending] = useState(true);
    // const url = 'https://api.cricapi.com/v1/match_info?apikey=a1ac07f4-3202-4c8c-bc47-d651b2a74eac&id=da1fb815-6566-40d3-a9d1-2720fb941fa6';
    const url = 'https://api.cricapi.com/v1/currentMatches?apikey=4957f2ae-2a81-4246-8b4f-4f2689870cd5&offset=0';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '3cf59040femshd2947127d1d9c37p14c727jsnbf1915e62996',
//     'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//   }
// };
    useEffect(() => {
        setTimeout(()=>{
            const fetchWorkouts = async () => {
                const response = await fetch(url)
        .then(res => res.json())
        .then(json =>  {
            setMatches(json.data)
            setIsPending(false)
            
            
        })
        .catch(err => console.error('error:' + err));
            }
            fetchWorkouts()
        },2000)
      }, [])
    return ( 
        <div className="App">
            { isPending && <Spinner animation="border" />}
        {matches && matches.map((match) => (
        <News match={match}>
        
        </News>
        
        ))||
        <h2>YOU HAVE REACHED YOUR DAILY API LIMITS FOR THE CRICKET SCORE
            <h3>Try Again Later</h3>
        </h2>}   
        
</div>
     );
}
 
export default UseFetch;