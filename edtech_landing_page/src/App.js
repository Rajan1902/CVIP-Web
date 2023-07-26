import './App.css'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Courses from './components/Courses'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Courses/>
      <hr/>
      <Pricing/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
