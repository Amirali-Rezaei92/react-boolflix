import { MovieProvider } from "./context/MovieContext";
import ResultSectionMovies from "./components/ResultSectionMovies";
import ResultSectionSeries from "./components/ResultSectionSeries";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <MovieProvider>
      <Header />
      <SearchBar />
      <ResultSectionMovies />
      <ResultSectionSeries/>
    </MovieProvider>
  );
}

export default App;
