import React from 'react';
import { Start }  from './components/start.js';
// import { Create } from './components/create.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Search } from './components/search.js';
import Menu from './components/menu.js';
import { Board } from './components/board.js';


function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/tictactoe" element={<Start />} />
          <Route path="/search" element={<Search />} />
          <Route path="/board" element={<Board />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
