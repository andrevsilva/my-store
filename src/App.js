import Header from "./components/header/header"
import Home from "./components/home/home"
import Products from "./components/products/products"
import Aboult from "./components/aboult/aboult"

import { BrowserRouter , Switch , Route  } from 'react-router-dom'
import { CartProvider } from './components/cart/CartContext'
import ProductCart from './components/cart/cart'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/products" component={Products} />
        <Route path="/aboult" component={Aboult} />
        <Route path="/cart" component={ProductCart} />
      </Switch>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
