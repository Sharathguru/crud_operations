import React from "react";

import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Insert from "./Component/Insert";
import Update from "./Component/Update";
import Delete from "./Component/Delete";
import Login from "./Component/Login";

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Insert />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;