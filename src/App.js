import './scss/app.scss';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/ PizzaBlock';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://6385c9b7875ca3273d457334.mockapi.io/pizzas')
      .then((res) => {
        return res.json();
      })
      .then((pizzas) => {
        setPizzas(pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => {
              return <PizzaBlock key={pizza.id} {...pizza} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
