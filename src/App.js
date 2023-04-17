import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, BrowserRouter,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Information from './components/pages/Information';
import Footer
 from './components/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/Information" exact Component={Information}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
