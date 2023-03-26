import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from './components/Wrapper/Wrapper';
import Home from './components/HomePage.js/Home';
import TV from './pages/TV';
import Search from './pages/Search';
import Movies from './pages/Movies';
import Trending from './pages/Trending';
import Footer from './components/Footer.js/Footer';



function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tv" element={<TV />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/Trending" element={<Trending />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
