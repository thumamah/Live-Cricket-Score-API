const API_KEY = "a1ac07f4-3202-4c8c-bc47-d651b2a74eac";

export const getMatches = () => {
  const url = 'https://api.cricapi.com/v1/matches?apikey=a1ac07f4-3202-4c8c-bc47-d651b2a74eac&offset=0';
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};
//get the score of the cuurent match