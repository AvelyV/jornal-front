import { useState, useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CategoriesSelection from './components/CategoriesSelection';
import Home from './components/Home';
import Nav from './components/Nav';
import NewEntry from './components/NewEntry';
import stateReducer from './stateReducer';
import journalContext from './jornalContext';
import api from './api'

const initialState = {
  categories: [],
  entries: [],
};

function App() {
  // const [categories, setCategories] = useState(['food', 'coding', 'other'])
  // multiple entries, so we need an array to store them
  // const [entries, setEntries] = useState([])

  const [state, dispatch] = useReducer(stateReducer, initialState);
  const { entries, categories } = state;

  useEffect(async () => {
    const res = await api.get('categories');
    // const data = await res.json();

    dispatch({
      type: 'setCategories',
      data: res.data
    });
  }, []);

  useEffect(async () => {
    const entries_res = await api.get('entries');
    // const entries_data = await entries_res.json();

    dispatch({
      type: 'setEntries',
      data: entries_res.data,
    });
  }, []);

  return (
    <>
      <journalContext.Provider value={{ state, dispatch }}>
        <h1>Journal</h1>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<CategoriesSelection />} />
            <Route path="/entry/new/:cat_id" element={<NewEntry />} />
            <Route path="*" element={<h4>Page Not Found</h4>} />
          </Routes>
        </BrowserRouter>
      </journalContext.Provider>
    </>
  );
}

export default App;
