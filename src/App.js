import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';
import CreateAd from './Component/Ad/CreateAd';
import Textform from './Component/Ad/Textform';
import Mediaform from './Component/Ad/Mediaform';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path='/Textform' element={<Textform />} />
        <Route path='/Mediaform' element={<Mediaform />} />
      </Routes>


    </div>
  );
}

export default App;
