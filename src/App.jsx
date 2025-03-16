import { Router } from 'react-router-dom';
import './css/App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import Text from './Text';
import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
import NavigationBar from './components/NavigativeBar';


function App() {

  return (

    <div className='app'>

      <NavigationBar>
      </NavigationBar>
      
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>

          <Route path='/favourites' element={<Favourites></Favourites>}>
          </Route>
        </Routes>
      </main>

      <div className='email-address'>
        <p>
          Email me at: dung.lebk2210573@hcmut.edu.vn
        </p>
      </div>

    </div>
  );
}

export default App
