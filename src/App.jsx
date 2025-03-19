import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Artists from "./pages/Artists"
import Artist from "./pages/Artist"
import Songs from "./pages/Songs"
import Song from "./pages/Song"

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/artists" element={<Artists />}/>
        <Route path="/artist/:id" element={<Artist/>}/>
        <Route path="/songs" element={<Songs />}/>
        <Route path="/song/:id" element={<Song />}/>
      </Routes>
    </HashRouter>

  );
};

export default App;
