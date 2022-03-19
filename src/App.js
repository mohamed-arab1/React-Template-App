import Home from "./Pages/Home";
import About from './Pages/About';
import AboutWebSurfing from "./Pages/AboutWebSurfing";
import Testimonials from "./Pages/Testimonials";
import Blogs from "./Pages/Blogs";
import Footer from "./Pages/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Home />
      <About />
      <AboutWebSurfing />
      <Testimonials />
      <Blogs />
      <Footer />
    </>

  );
}

export default App;
