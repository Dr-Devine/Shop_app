import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage';
import ItemPage from './components/ItemPage';


function App() {

const stockData = [
  {title: 'FunnyMan', price: 10},
  {title: 'Mad Men', price: 18},
  {title: 'Matrix', price: 9},
  {title: 'For all Mankind', price: 20},
  {title: 'Labyrinth', price: 8},
  {title: 'Severence', price: 19},
  {title: 'Stranger Things', price: 7},
  {title: 'Archer', price: 15},
  {title: 'The Good Place', price: 13,}
];

const [basket, setBasket] = useState([]);

const addToBasket = (item) => {
  const basketCopy = [...basket, item]
  setBasket(basketCopy);
};

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="*" element={ <h1>Not found</h1>} />
        <Route path="/" element={ <ItemPage stockData={stockData} addToBasket={addToBasket}/>}  />
        <Route exact path="/checkout" element={ <CheckoutPage basket={basket} />} />
      </Routes>
    </Router>

  );
}

export default App;
