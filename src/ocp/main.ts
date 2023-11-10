import { Messagin } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';

const shoppingCart = new ShoppingCart(new FiftyPercentDiscount());
const messaging = new Messagin();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('T-Shirt', 99.99));
shoppingCart.addItem(new Product('Shoes', 199.99));
shoppingCart.addItem(new Product('Hat', 59.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
