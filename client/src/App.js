import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;