import { createContext, useState } from "react";
import { API_KEY, BASE_URL } from "../services/tmdb";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [searchText, setSearchText] = useState("");

    const searchMovie = () => {
        if (!searchText.trim()) return;

        fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results || []);
            })
            .catch(err => console.error("Error fetching movies:", err));
    };

    const searchSeries = () => {
        if (!searchText.trim()) return;

        fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSeries(data.results || []);
            })
            .catch(err => console.error("Error fetching series:", err));
    };

    return (
        <MovieContext.Provider
            value={{
                movies,
                series,
                searchText,
                setSearchText,
                searchMovie,
                searchSeries,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}
