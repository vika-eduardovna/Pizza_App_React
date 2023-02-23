import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/data.json'
import './scss/app.scss'


function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content_top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="title">All pizzas</h2>
          <div className="items">
           {
            pizzas.map(el =>  <PizzaBlock key={el.id} {...el}/>)
           }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;