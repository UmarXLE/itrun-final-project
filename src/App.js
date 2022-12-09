import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import CreateDonationPage from './pages/CreateDonationPage/CreateDonationPage';
import CreateNewsPage from './pages/CreateNewsPage/CreateNewsPage';
import DonationPage from './pages/DonationPage/DonationPage';
import ElderlyPage from './pages/ElderlyPage/ElderlyPage';
import FavoriteNewsPage from './pages/FavoriteNewsPage/FavoriteNewsPage';
import HalpingAnimals from './pages/HalpingAnimals/HalpingAnimals';
import HomePage from './pages/HomePage/HomePage';
import NaturalDisasters from './pages/NaturalDisasters/NaturalDisasters';
import NewsPage from './pages/NewsPage/NewsPage'
import PaymentPage from './pages/PaymentPage/PaymentPage';
import PoachingPage from './pages/PoachingPage/PoachingPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProfilUserPage from './pages/ProfilUserPage/ProfilUserPage';
import SingleDonationPage from './pages/SingleDonationPage/SingleDonationPage';
import SingleNewsPage from './pages/SingleNewsPage/SingleNewsPage';
import UserPages from './pages/UsersPages/UserPages';
import WarPage from './pages/WarPage/WarPage'

function App() {

      // user.status == 'admin' ? () : ()

  return (
  <>
        <Header />
        <div className="App">

     
<Routes>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/news' element={<NewsPage />}/>
  <Route path='/about' element={<AboutPage />}></Route>
  <Route path='/donation' element={<DonationPage/>}></Route>
  <Route path='/profile' element={<ProfilePage/>}/>
  <Route path='/posts/:id' element={<SingleNewsPage />}/>
  <Route path='/createnews' element={<CreateNewsPage />}/>
  <Route path='/users' element={<UserPages/>}/>
  <Route path='naturaldisasters' element={<NaturalDisasters/>}/>
  <Route path='/halpinganimals' element={<HalpingAnimals/>}/>
  <Route path='/poaching' element={<PoachingPage/>}/>
  <Route path='/war' element={<WarPage/>}/>
  <Route path='/elderly' element={<ElderlyPage/>}/>
  <Route path='/favoritenews' element={<FavoriteNewsPage/>}/>
  <Route path='/profiluser/:id' element={<ProfilUserPage/>}/>
  <Route path='/createdonation' element={<CreateDonationPage/>}/>
  <Route path='/donations/:id' element={<SingleDonationPage/>}/>
  <Route path='/payment/:id' element={<PaymentPage />}/>
</Routes>


   


</div>

  </>
   
  );
}

export default App;
