import React,{Component} from 'react';
import ProductStore from '../stores/ProductStore';
import shoppingCartStore from '../stores/ShoppingCartStore';

class ProductView extends Component {
  constructor (props) {
    super(props)
    this.store = new ProductStore(this.props.product)
	}
	// Añadimos el producto al carrito de la compra
  addProductToCart = (event) => {
    const existingEntry = this.checkIfProductIsInCart()
    if (existingEntry) {
      existingEntry.units += 1
    } else {
      this.store.units += 1
      shoppingCartStore.entries.unshift(new ProductStore(this.props.product))
    }
  }

  // Comprobamos si el producto existe en nuestro carrito
  checkIfProductIsInCart () {
    return shoppingCartStore.entries.find((entry) => {
      if (entry.product === this.props.product)
        return entry
      return false
    }, this)
  }
  render () {
    return (
      <li className="shop-product">
      	<img src={ this.props.product.img} alt="cats"/>
        <h2>{ this.props.product.name }</h2>
        <h4>{ this.props.product.price } €</h4>
        <button onClick={ this.addProductToCart }>Add to cart</button>
      </li>
    )
  }
}
export default ProductView;