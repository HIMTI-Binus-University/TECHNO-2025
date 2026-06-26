// LIBRARIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import Events from "./pages/Events";
import Faq from "./pages/Faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
