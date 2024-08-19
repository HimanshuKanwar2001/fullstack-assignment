import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelpCenter from "./pages/HelpCenter";
import CardForm from "./components/CardForm/CardForm";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelpCenter />} />
          <Route path="/add-card" element={<CardForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
