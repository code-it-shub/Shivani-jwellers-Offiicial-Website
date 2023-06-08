import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Categories from './Categories'
import logo from "./assets/logo.svg";
import { useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import Contact from "./Contact";

const Header = () => {
  let location = useLocation().pathname;
  return (
    <div className="head flex justify-center flex-col w-screen items-center">
      <div className="logo w-full flex flex-col items-center justify-center mt-[32px] mb-[29px]">
        <img src={logo} alt="logo" />
        <h1 className="mt-[13px] text-[24px] font-urban-500 font-medium">Shivani Jwellers</h1>
      </div>
      <div className="navbar flex bg-[white] rounded-xl px-[280px] ">
        <nav className="flex font-urban font-normal text-[20px] ">
          <Link to="/" className={`cool-link my-[23px] w-[170px] flex justify-center items-center font-urban hover:font-bold hover:text-[#F24949] transition-all duration-[.1s] ease-in-out ${location==='/' ? 'text-[#F24949] font-bold after:hover:w-0' :''}`}>Home</Link>
          <Link to="/about" className={`cool-link my-[23px] w-[170px] flex justify-center items-center font-urban hover:font-bold hover:text-[#F24949] transition-all duration-[.1s] ease-in-out ${location==='/about' ? 'text-[#F24949] font-bold after:hover:w-0' :''}`}>About</Link>
          <Link to="/categories" className={`cool-link my-[23px] w-[170px] flex justify-center items-center font-urban hover:font-bold hover:text-[#F24949] transition-all duration-[.1s] ease-in-out ${location==='/categories' ? 'text-[#F24949] font-bold after:hover:w-0' :''}`}>Categories</Link>
          <Link to="/contact" className={`cool-link my-[23px] w-[170px] flex justify-center items-center font-urban hover:font-bold hover:text-[#F24949] transition-all duration-[.1s] ease-in-out ${location==='/contact' ? 'text-[#F24949] font-bold after:hover:w-0' :''}`}>Contact</Link>
        </nav>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
