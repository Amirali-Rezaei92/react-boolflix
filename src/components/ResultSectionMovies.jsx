import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Card from "./Card";

function ResultSectionMovies(){
    const {movies}= useContext(MovieContext);

    return(
        <div>
            <h3>Movies</h3>
            {movies.length === 0 && <p>No movies found.</p>}
            <div>
                {movies.map((movie)=>(
                    <div key={movie.id}>
                        <Card item={movie}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ResultSectionMovies;