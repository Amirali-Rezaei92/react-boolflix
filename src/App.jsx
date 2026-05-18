import { MovieProvider } from "./context/MovieContext";
import {ResultSectionMovies} from "./components/ResultSectionMovies";
import {ResultSectionSeries} from "./components/ResaultSectionSeries";

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
