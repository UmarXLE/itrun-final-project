import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import DonationPage from './pages/DonationPage/DonationPage';
import HomePage from './pages/HomePage/HomePage';
import NewsPage from './pages/NewsPage/NewsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage';
function App() {
  return (
    <div className="App">


      
      <Header />

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/news' element={<NewsPage />}/>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/donation' element={<DonationPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>




      
    </div>
  );
}

export default App;
