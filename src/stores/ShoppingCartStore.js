import { decorate, computed, observable } from 'mobx';

class ShoppingCartStore {
	entries = []
  
  get units() {
    return this.entries.reduce((sum, entry) => {
      return sum + entry.units
    }, 0);
  }
  get totalPrice() {
    return this.entries.reduce((sum, entry) => {
      const price = sum + (entry.product.price * entry.units)
      const parsed = Math.round(price * 100) / 100
      return parsed
    }, 0);
  }
}

decorate(ShoppingCartStore,{
  title: observable,
  entries: observable,
  shipping: observable,
  units: computed,
  totalPrice: computed
})

const shoppingCartStore = new ShoppingCartStore();
export default shoppingCartStore; 