import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, BrowserRouter,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
