import React,{Component} from 'react';
import shoppingCartStore from '../stores/ShoppingCartStore';

class EntryView extends Component {
	render () {
		return (
			<li className="shop-product">
				<h2>{ this.props.entry.product.name }</h2>
				<h4>{ this.props.entry.product.price }</h4>
				<h4>{ this.props.entry.units } uds. - { this.props.entry.total } €</h4>
				<button onClick={ this.removeProduct }>Remove</button>
			</li>
		);
	}
	
	removeProduct = (event) => {
		this.props.entry.units = 0
		shoppingCartStore.entries.splice(shoppingCartStore.entries.indexOf(this.props.entry.product), 1)
	}
}

export default EntryView;