import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import StopWatch from "./pages/stopwatch/StopWatch";
import Timer from "./pages/timer/Timer";
import WorldTime from "./pages/worldTime/WorldTime";
import Alarm from "./pages/alarm/Alarm";
import FocusSession from "./pages/focusSession/FocusSession";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="focus-session" element={<FocusSession />} />
          <Route path="timer" element={<Timer />} />
          <Route path="alarm" element={<Alarm />} />
          <Route index element={<StopWatch />} />
          <Route path="world-time" element={<WorldTime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
