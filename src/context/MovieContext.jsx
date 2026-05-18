import { createContext } from "react";
import { useState } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [searchText, setSearchText] = useState("");
}

return (
    <MovieContext.Provider value={{
        movies,
        series,
        searchText,
        setSearchText
    }}>
        {children}
    </MovieContext.Provider>
);