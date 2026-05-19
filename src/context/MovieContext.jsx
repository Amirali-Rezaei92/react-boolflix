import { createContext, useState } from "react";
import { searchMovies, searchTvShows } from "../utils/tmdb";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        if (!searchText.trim()) return;

        searchMovies(searchText)
            .then((movieData) => {
                setMovies(movieData.results || []);
            })
            .catch((err) => console.error("Movie error:", err));

        searchTvShows(searchText)
            .then((seriesData) => {
                setSeries(seriesData.results || []);
            })
            .catch((err) => console.error("Series error:", err));
    };

    return (
        <MovieContext.Provider
            value={{
                movies,
                series,
                searchText,
                setSearchText,
                handleSearch,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}
