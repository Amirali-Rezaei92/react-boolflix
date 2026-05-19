import ResultSectionMovies from "../components/ResultSectionMovies";
import ResultSectionSeries from "../components/ResultSectionSeries";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function Home() {
    return (
        <>
            <SearchBar />
            <ResultSectionMovies />
            <ResultSectionSeries />
        </>
    );
}

export default Home;
