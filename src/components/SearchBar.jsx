import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function SearchBar() {
    const { searchText,
        setSearchText,
        handleSearch,
        selectedGenre,
        setSelectedGenre,
        genres
    } = useContext(MovieContext);
    return (
        <div className="container d-flex justify-content-center mt-4 gap-2" >
            <input className="form-control w-25"
                type="text"
                placeholder="Search ... "
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} />
            <button className="btn btn-secondary" onClick={handleSearch}>Search</button>
            <select
                className="form-control w-25"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
            >
                <option value="all">All Genres</option>

                {genres.map(g => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                ))}
            </select>

        </div>
    );
}
export default SearchBar;