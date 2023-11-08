import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _itens: CartItem[] = [];

  get items(): Readonly<CartItem[]> {
    return this._itens;
  }

  addItem(item: CartItem): void {
    this._itens.push(item);
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

  clear(): void {
    console.log('Carrinho vazio');
    this._itens.length = 0;
  }
}
