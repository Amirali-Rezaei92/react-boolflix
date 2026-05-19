import { createContext, useState, useEffect } from "react";
import { searchMovies, searchTvShows } from "../utils/tmdb";
import { fetchFromTMDB } from "../utils/tmdb"; 

const MovieContext = createContext();

function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [searchText, setSearchText] = useState("");

    const [selectedGenre, setSelectedGenre] = useState("all");
    const [genres, setGenres] = useState([]);

    const handleSearch = () => {
        if (!searchText.trim()) return;

        searchMovies(searchText)
            .then((movieData) => {
                setMovies(movieData.results || []);
            })
            .catch((err) => console.error("Movies error:", err));

        searchTvShows(searchText)
            .then((seriesData) => {
                setSeries(seriesData.results || []);
            })
            .catch((err) => console.error("Series error:", err));
    };

    useEffect(() => {
        fetchFromTMDB("/genre/movie/list")
            .then((movieData) => {
                fetchFromTMDB("/genre/tv/list")
                    .then((seriesData) => {
                        const all = [...movieData.genres, ...seriesData.genres];

                        const unique = all.filter(
                            (g, i, arr) => i === arr.findIndex((x) => x.id === g.id)
                        );

                        setGenres(unique);
                    });
            })
            .catch((err) => console.error("Genres error:", err));
    }, []);

    return (
        <MovieContext.Provider
            value={{
                movies,
                series,
                searchText,
                setSearchText,
                handleSearch,
                selectedGenre,
                setSelectedGenre,
                genres,
                setGenres,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}

export { MovieContext, MovieProvider };
