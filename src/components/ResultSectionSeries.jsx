import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Card from "./Card";

function ResultSectionSeries(){
    const {series , selectedGenre}= useContext(MovieContext);
    const filteredSeries = series.filter(show =>
    selectedGenre === "all" || show.genre_ids.includes(Number(selectedGenre))
);

    return(
        <div>
            {filteredSeries.length === 0 && <p>No series found.</p>}
            <div className="d-flex flex-wrap gap-3 justify-content-center w-100">
                {filteredSeries.map((serie)=>(
                    <div key={serie.id}>
                        <Card item={serie}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ResultSectionSeries;