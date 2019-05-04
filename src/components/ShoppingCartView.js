import React,{Component} from 'react';
import { observer } from 'mobx-react';
import EntryView from './EntryView';

class ShoppingCartView extends Component {
    render () {
      return (
        <div className="shopping-cart">
            <ul>
                { this.props.store.entries.map((product, i) => <EntryView entry={ product } key={ i } />) }
            </ul>
            <span>Total price: { this.props.store.totalPrice } €</span>
        </div>
      )
    }
  }

  export default observer(ShoppingCartView);