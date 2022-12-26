import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

//components
import Products from './components/shared/Products';
import ProductDetails from './components/shared/ProductDetails';
import Navbar from './components/shared/Navbar';
import Cart from './components/shared/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
