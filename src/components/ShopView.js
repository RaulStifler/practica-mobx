import React,{Component} from 'react';
import ProductView from './ProductView';

class ShopView extends Component {
	render () {
		return(
			<div className="shop">
				<ul>
					{ this.props.products.map((product, i) => <ProductView product={ product } key={ i } />) }
				</ul>
			</div>
		)
	}
}

export default ShopView;