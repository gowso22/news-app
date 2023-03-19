import Categories from './components/Categories';
import NewsList from './components/NewsList';
import {useCallback, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NewsPage from './components/NewsPage';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "*" element={<NewsPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
