import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import ProductsNike from './components/ProductsNIke';
import ProductsAdidas from './components/ProductsAdidas';
import ProductsPuma from './components/ProductsPuma';
import ProductsVans from './components/ProductsVans';
import ProductsBalenciaga from './components/ProductsBalenciaga';
import ProductsConverse from './components/ProductsConverse';
import ProductsNewBalance from './components/ProductsNewBalance';
import ProductsReebok from './components/ProductsReebok';
import ProductsAsics from './components/ProductsAsics';
import Payment from './components/Payment';
import Product from './components/Product';



function App() {
  return (
    <div className="App">
      
      <div className>
      
</div>
</div>,

<div>
        <Header />
        <Container>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/Profile' component={Profile} />
          <Route path='/Login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/Products' component={Products} />
          <Route path='/ProductsNike' component={ProductsNike} />
          <Route path='/ProductsAdidas' component={ProductsAdidas} />
          <Route path='/ProductsPuma' component={ProductsPuma} />
          <Route path='/ProductsVans' component={ProductsVans} />
          <Route path='/ProductsBalenciaga' component={ProductsBalenciaga} />
          <Route path='/ProductsConverse' component={ProductsConverse} />
          <Route path='/ProductsNewBalance' component={ProductsNewBalance} />
          <Route path='/ProductsReebok' component={ProductsReebok} />
          <Route path='/ProductsAsics' component={ProductsAsics} />
          <Route path='/Payment' component={Payment} />
          <Route path='/Product' component={Product} />
          
        </Container>
        <Footer />
      </div>

    
  );
}

export default App;
