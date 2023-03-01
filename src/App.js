import React, { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import './scss/app.scss'


function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://63ff2b80571200b7b7d749c8.mockapi.io/pizzas')
      .then(res => res.json())
      .then(json => setItems(json));
    setIsLoading(!isLoading);
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
              isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map(el => <PizzaBlock key={el.id} {...el} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;