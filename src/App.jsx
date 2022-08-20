import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Staff from "./components/Staff/Staff";
import Navbar from "./components/HomePage/Navbar";
import Episodes from "./components/Episodes/Episodes";
function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
