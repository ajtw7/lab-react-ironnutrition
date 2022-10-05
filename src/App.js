// import logo from './logo.svg';
import './App.css';
import foods from '../src/foods.json';
import FoodBox from '../src/components/FoodBox';

function App() {
  return (
    <div className="App">
    <h1>Food List</h1>
      { foods.map(food => {
       return( 
          <FoodBox key={food.name} food={food} />
      );  
    })

  } 
  </div>
)}

export default App;
