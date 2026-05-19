import ResultSectionMovies from "../components/ResultSectionMovies";
import ResultSectionSeries from "../components/ResultSectionSeries";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function Home() {
    return (
        <>
            <SearchBar />
            <div className="d-flex gap-2 justify-content-center p-4 mt-4 ">

                <div className="mt-4 form-control text-center bg-secondary text-white">
                    <h2 className="text-center">Movies</h2>
                    <div className="d-flex flex-wrap gap-3 justify-content-center mt-4 card-hover">
                        <ResultSectionMovies />
                    </div>
                </div>

                <div className="mt-4 form-control text-center">
                    <h2 className="text-center">Series</h2>
                    <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
                        <ResultSectionSeries />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
