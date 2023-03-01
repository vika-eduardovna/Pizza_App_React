import React, { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss'


function App() {

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch('https://63ff2b80571200b7b7d749c8.mockapi.io/pizzas')
      .then(res => res.json())
      .then(json => setItems(json));
  }, []); //empty array is component did mount

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content_top">
            <Categories />
            <Sort />
          </div>
          <h2 className="title">All pizzas</h2>
          <div className="items">
            {
              items.map(el => <PizzaBlock key={el.id} {...el} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;