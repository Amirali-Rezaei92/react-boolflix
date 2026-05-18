import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function ResultSectionMovies(){
    const {movies}= useContext(MovieContext);

    return(
        <div>
            <h3>Movies</h3>
            {movies.length === 0 && <p>No movies found.</p>}
            <div>
                {movies.map((movie)=>(
                    <div key={movie.id}>
                        <h4>{movie.title}</h4>
                        <p>{movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ResultSectionMovies;