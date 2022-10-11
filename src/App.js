import './App.css';
import Header from './component/Header';
import { Footer } from './component/Footer';
import { Home } from './component/Home';
import { Switch, Route } from "react-router-dom";
import ProductDetails from './component/productsDetails';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
