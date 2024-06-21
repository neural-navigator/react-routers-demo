import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Product from './components/Product';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
const LazyAbout = React.lazy(() => import('./components/About'))


function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='index' element={<Home />}></Route>
        <Route path='about' element={
          <React.Suspense fallback='...loading'>
            <LazyAbout />
          </React.Suspense>  
            }></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='products' element={<Product />}>
          <Route index element={<FeaturedProducts />}/>
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route index element={<Admin/>} />
          <Route path=':userId' element={<UserDetails />}></Route>
          <Route path='admin' element={<Admin/>}></Route>
        </Route>
        <Route path='*' element={<NoMatch />}></Route>
    </Routes>
    </>
  );
}

export default App;
