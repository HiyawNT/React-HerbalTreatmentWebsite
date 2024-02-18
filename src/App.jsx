import Header from "./components/Header";
import Hero from "./components/Hero";
import CondtionsList from "./components/ImgCards";
import Footer from "./components/Footer";
import HerbsList from "./components/HerbsList";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <Hero />

      <CondtionsList />
      <HerbsList />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
