import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>


      <Header></Header>
    </BrowserRouter>
  );
}

export default App;

     