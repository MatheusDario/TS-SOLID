type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'close';

export class ShoppingCart {
  private readonly _itens: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  get items(): Readonly<CartItem[]> {
    return this._itens;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  addItem(...item: CartItem[]): void {
    this._itens.push(...item);
  }

  removeItem(index: number): void {
    this._itens.slice(index, 1);
  }

  total(): number {
    return +this._itens
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._itens.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'close';
    this.sendMessage(`Seu pedido no valor de R$ ${this.total()} foi enviado!`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Menssagem enviada: ', msg);
  }

  saveOrder(): void {
    console.log('Seu pedido foi salvo');
  }

  clear(): void {
    console.log('Carrinho vazio');
    this._itens.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem(
  { name: 'T-Shirt', price: 69.9 },
  { name: 'Blouse', price: 89.9 },
  { name: 'Shoes', price: 169.9 },
);

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
