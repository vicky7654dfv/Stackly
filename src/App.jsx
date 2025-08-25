import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ThemeProvider from "./components/ThemeContext/ThemeContext";
import Clock from "./pages/Clock/Clock";

export default function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/clock/:zone" element={<Clock />}/>
      </Routes>
      <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
