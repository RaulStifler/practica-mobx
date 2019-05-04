import { decorate, computed, observable } from 'mobx';

export default class ProductStore {
	// Unidades del producto añadidas al carro
	units = this.units

	constructor (product) {
		this.product = product
		this.units = 1
	}

	// Precio total 
	get total () {
		return this.product ? this.product.price * this.units : 0
	}
}

decorate(ProductStore,{
  units: observable,
  total: computed
}) 