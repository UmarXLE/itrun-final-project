import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import CreateNewsPage from './pages/CreateNewsPage/CreateNewsPage';
import DonationPage from './pages/DonationPage/DonationPage';
import HomePage from './pages/HomePage/HomePage';
import NewsPage from './pages/NewsPage/NewsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SingleNewsPage from './pages/SingleNewsPage/SingleNewsPage';

function App() {

      // user.status == 'admin' ? () : ()

  return (
    <div className="App">

      <Header />
     
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/news' element={<NewsPage />}/>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/donation' element={<DonationPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/posts/:id' element={<SingleNewsPage />}/>
        <Route path='/createnews' element={<CreateNewsPage />}/>
      </Routes>

    </div>
  );
}

export default App;
