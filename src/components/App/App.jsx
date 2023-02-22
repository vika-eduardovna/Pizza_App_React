import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import Sort from "../Sort/Sort";
import PizzaBlock from "../PizzaBlock/PizzaBlock";
import './app.scss'

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
          <h2 className="content_title">All pizzas</h2>
          <div className="content_items">
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
