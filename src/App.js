import {Routes, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import MovieWatch from './pages/MovieWatch';
import ExplorePage from './pages/ExplorePage';
import SearchPageResults from './pages/SearchPageResults';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/search/:query/page=:page' element={<SearchPageResults />} />
      <Route path='/movie/:id' element={<MovieDetail />} />
      <Route path='/movie/:id/watch' element={<MovieWatch />} />
      <Route path='/explore' element={<ExplorePage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/explore' element={<ExplorePage />} />
    </Routes>
  );
}

export default App;
