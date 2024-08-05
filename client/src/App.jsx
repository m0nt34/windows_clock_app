import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import StopWatch from "./pages/stopwatch/StopWatch";
import Timer from "./pages/timer/Timer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StopWatch />} />
          <Route path="timer" element={<Timer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
