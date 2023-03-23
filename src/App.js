import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from './components/Wrapper/Wrapper';
import Home from './components/HomePage.js/Home';
import TV from './pages/TV';
import Footer from './components/Footer.js/Footer';



function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="tv" element={<TV />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
    // <section>

    //   <Home></Home>
    // </section>
  );
}

export default App;
