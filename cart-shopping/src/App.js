import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

//components
import Products from './components/shared/Products';
import ProductDetails from './components/shared/ProductDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Products} />
        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
