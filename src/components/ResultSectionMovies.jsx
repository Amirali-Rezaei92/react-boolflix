import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Card from "./Card";

function ResultSectionMovies() {
    const { movies, selectedGenre } = useContext(MovieContext);
    const filteredMovies = movies.filter(movie =>
        selectedGenre === "all" || movie.genre_ids.includes(Number(selectedGenre))
    );
    return (
        <div>
            {filteredMovies.length === 0 && <p>No movies found.</p>}
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {filteredMovies.map((movie) => (
                    <div key={movie.id}>
                        <Card item={movie} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ResultSectionMovies