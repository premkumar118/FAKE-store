import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Cart from './components/Cart';
import ProductPage from './components/Product-Page';
import Page404 from './components/Page404';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/cart" Component={Cart} />
          <Route path="/product/:id" Component={ProductPage} />
          <Route path="*" Component={Page404} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
