import { OrderStatus } from './interfaces/order-status';
import { Messagin } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // eslint-disable-next-line
  constructor(private readonly cart: ShoppingCart,
    // eslint-disable-next-line
    private readonly sendMessage: Messagin,
    // eslint-disable-next-line
    private readonly persistency: Persistency,
    // eslint-disable-next-line
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'close';
    this.sendMessage.sendMessage(
      `Seu pedido no valor de R$ ${this.cart.totalWithDiscount()} foi enviado!`,
    );
    this.persistency.saveOrder();
    console.log(`O cliente é: ${this.customer.Name}, ${this.customer.IDN}`);
    this.cart.clear();
  }
}
