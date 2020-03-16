import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/types/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private cartApi = 'api/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.cartApi}/all`);
  }
}
