import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import StopWatch from "./pages/stopwatch/StopWatch";
import Timer from "./pages/timer/Timer";
import WorldTime from "./pages/worldTime/WorldTime";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StopWatch />} />
          <Route path="timer" element={<Timer />} />
          <Route path="world-time" element={<WorldTime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
