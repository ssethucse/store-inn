import { Component,OnInit } from '@angular/core';
import { OrderResp } from 'src/app/common/order-resp';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/service/order-history.service';
import { InvoiceHistory } from 'src/app/common/invoice-history';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orderHistoryList: OrderResp[]=[];
                             orderInvoiceList: InvoiceHistory[]=[];


                               constructor(private orderHistoryService: OrderHistoryService,
                                           private route: ActivatedRoute,
                                           private router: Router) { }

                               ngOnInit(): void {
                                 this.handleOrderHistory();
                               }

                                handleOrderHistory(){
                                    this.orderHistoryService.getOrders().subscribe(
                                      data => {
                                        this.orderHistoryList = data;
                                      }
                                    );
                                }

                              updateStatus(id: string){
                                 this.orderHistoryService.updateOrder(id).subscribe(
                                    data => {
                                      console.log(data);
                                    }
                                  );
                                 location.reload();
                              }

                               invoiceDetails(id: string){
                                 this.orderHistoryService.updateInvoice(id).subscribe(
                                  data=>{
                                    this.orderInvoiceList = data;
                                  }
                                 )
                               }

}
