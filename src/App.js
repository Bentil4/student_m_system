import "./App.css";
import Sidebar from "./components/Sidebar";
import Previewpage from "./components/Previewpage";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [content, setContent] = useState(<Dashboard />);

  const changePage = (component) => {
    setContent(component);
  };

  return (
    <div className="app">
      <Sidebar changePage={changePage} />
      <Previewpage content={content} />
    </div>
  );
}

export default App;
