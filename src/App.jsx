import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cards } from './components/Cards';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20"> {/* Offset for fixed Navbar */}
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
