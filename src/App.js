import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServePage from './pages/ServePage';
import CodePage from './pages/CodePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/serve" element={<ServePage />} />
        <Route path="/code" element={<CodePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
