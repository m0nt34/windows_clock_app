import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import StopWatch from "./pages/stopwatch/StopWatch";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="stopwatch" element={<StopWatch />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
