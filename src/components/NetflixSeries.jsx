import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () =>{
  return (
    <>
     <h1>Web Series Cards</h1>

     <ul>
      {seriesData.map(
        (currElem) => { 
          return (
            <SeriesCard key={currElem.id} currElement = {currElem}/> // props
          )
        }
      )}
     </ul>
    </>
  );
}