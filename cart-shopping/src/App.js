import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

//components
import Products from './components/shared/Products';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/products" component={Products} />
        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
