import { useContext } from "react";
import {MovieContext} from "../context/MovieContext";

function SearchBar(){
    const {searchText , setSearchText}= useContext(MovieContext);
    return(
        <input type="text"
        placeholder="Search ... "
        value={searchText} 
        onChange={(e)=>setSearchText(e.target.value)}/>
    );
}
export default SearchBar;