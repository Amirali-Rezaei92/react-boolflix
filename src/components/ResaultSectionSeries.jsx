import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function ResultSectionSeries(){
    const {series}= useContext(MovieContext);

    return(
        <div>
            <h3>Series</h3>
            {series.length === 0 && <p>No series found.</p>}
            <div>
                {series.map((serie)=>(
                    <div key={serie.id}>
                        <h4>{serie.name}</h4>
                        <p>{serie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ResultSectionSeries;