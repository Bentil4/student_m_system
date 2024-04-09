import './App.css';
import Sidebar from './components/Sidebar';
import Previewpage from './components/Previewpage';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import { useUser } from './UserContext'; // Import useUser hook

function Main() {
  const [content, setContent] = useState(<Dashboard />);
  const { user } = useUser(); // Access user data using useUser hook
  console.log(user);
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

export default Main;
