import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function SearchBar() {
    const { searchText, setSearchText ,handleSearch} = useContext(MovieContext);
    return (
        <div>
            <input type="text"
                placeholder="Search ... "
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
export default SearchBar;