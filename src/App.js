import './App.css';
import NavBar from './components/NavBar';
import Meme from './components/Meme';
import './components/Footer.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Meme />
      <div className = "Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
