import React, { Component } from 'react';
import './App.css';
import store from './stores/ShoppingCartStore'
import ShoppingCartView from './components/ShoppingCartView';
import ShowView from './components/ShopView';
import Toolbar from './components/Toolbar';

const catalog = [
	{ name: 'Cat 1', price: 1.55, img: 'https://s-media-cache-ak0.pinimg.com/favicons/8532a851520bce5e78fb294d0e07eac5c877655e81a9c76941f26f55.png?9e884f0299eee37aedab60fe1ed363b5' },
	{ name: 'Cat 2', price: 9.99, img: 'http://i.kinja-img.com/gawker-media/image/upload/s--gRG2YWja--/efg4piwisx1tcco4byit.png' },
	{ name: 'Cat 3', price: 3.75, img: 'https://s-media-cache-ak0.pinimg.com/favicons/fa236078d19b23f4d78ec09fcf9f28c53761a7b6d24112b56cde9aa9.png?99028731b58ad617a5d407999149a159' },
	{ name: 'Cat 4', price: 7.15, img: 'http://i.kinja-img.com/gawker-media/image/upload/s--gRG2YWja--/efg4piwisx1tcco4byit.png' }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MobX in ReactJS</h1>
        </header>
        <Toolbar store={store}/>
        <ShowView products={ catalog }/>
        <ShoppingCartView store={store}/>
      </div>
    );
  }
}

export default App;
