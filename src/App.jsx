import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Details />} />
          <Route path="*" element={< NotFound />} />
        </Route>
      </Routes>
    </MovieProvider>
  );
}

export default App;
