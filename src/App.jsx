import React from "react";

import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Insert from "./Component/Insert";
import Update from "./Component/Update";
import Fetch from "./Component/Fetch";
import Delete from "./Component/Delete";

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Insert />} />
          <Route path="/update" element={<Update />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
