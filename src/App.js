import React from 'react';
import './App.css';
import ProductTable from './Components/ProductTable';

const products = [
{category: "Electronics", price: 50 , name:"Charger"} , 
{category: "Clothes", price:45, name:"Shirt"},
{category:"Electronics", price:1200, name:"Computer"},
{category: "Clothes", price:20, name:"Scarf"}
]

function App() {
  return (
    <div className="App">
      <ProductTable x={products} />
    </div>
  );
}
export default App;
