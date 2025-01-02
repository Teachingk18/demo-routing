import Profile from './screens/Profile';
import './App.css';
import LoginPage from './screens/Login';
import { Route, Routes } from 'react-router';

function App() {

  return (
    <div className='app w-screen min-h-screen bg-[#F0F4F5]'>
      <Routes>
        <Route path='' element={<h1>Hello MindX</h1>} />
        <Route path='/my-profile' element={<Profile />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App;
