import {Routes, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MovieDetail from './pages/MovieDetail';
import MovieWatch from './pages/MovieWatch';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/search/:query/page=:page' element={<SearchPage />} />
      <Route path='/movie/:id' element={<MovieDetail />} />
      <Route path='/movie/:id/watch' element={<MovieWatch />} />
    </Routes>
  );
}

export default App;
