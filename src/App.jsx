import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Intructions } from "./pages/Intructions";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="intructions/:id" element={<Intructions/>} />
        {/*<Route path="intructions/:id" element={<Intructions/>} /> */}
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
