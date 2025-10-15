import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss',
  standalone: false
})
export class OrderDetailComponent implements OnInit {
  id? : string | null;
  order?: Order | null;
  constructor(
    private route : ActivatedRoute,
    private orderSvc : OrderService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
}
