import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritesList from "./components/FavouritesList";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/jobs/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouritesList></FavouritesList>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
