import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/types/order';
import { Observable } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Observable<Order[]>;

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.orders = this.ordersService.getOrders().pipe(
      map(orders => {
        const products: {
          [orderId: string]: { product: Product; amount: number };
        } = orders.reduce((res, order) => {
          const productsObject = order.products.reduce(
            (resProducts, product) => {
              if (!resProducts[product._id]) {
                return {
                  ...resProducts,
                  [product._id]: { amount: 1, product }
                };
              }
              return {
                ...resProducts,
                [product._id]: {
                  amount: resProducts[product._id].amount + 1,
                  product
                }
              };
            },
            {}
          );
          return { ...res, [order._id]: productsObject };
        }, {});
        console.log('products', products);
        return orders;
      })
    );
  }
}
