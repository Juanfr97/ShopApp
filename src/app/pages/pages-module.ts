import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopService } from '../core/services/shop.service';
import { ShopComponent } from './shop.component/shop.component';
import { OrdersComponent } from './orders.component/orders.component';
import { ProductsComponent } from './products.component/products.component';
import { InvoicesComponent } from './invoices.component/invoices.component';
import { AdminLayout } from './admin-layout/admin-layout';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './pages.routes';
import { OrderService } from '../core/services/order.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { OrderDetailComponent } from './order-detail.component/order-detail.component';
import { NzTagModule } from 'ng-zorro-antd/tag';



@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    InvoicesComponent,
    OrdersComponent,
    AdminLayout,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzCardModule,
    NzTagModule
  ],
  providers:[
    ShopService,
    OrderService
  ],
  exports:[
    ShopComponent,
    ProductsComponent,
    OrdersComponent,
    InvoicesComponent,
    AdminLayout,
    RouterModule,
    OrderDetailComponent
  ]
})
export class PagesModule { }

/** PASOS PARA OBTENER DATOS DE UNA API
 * 1. VER LA RESPUESTA DE LA API
 * 2. CREAR LOS MODELOS
 * 3. CREAR EL SERVICIO ( CREAR METODOS Y PETICIONES A TRAVES DEL HTTPCLIENT )
 * 4. AGREGAR EL SERVICIO AL MODULO OOOOOOOO AL STANDALONE COMPONENT
 * 5. UTILIZAR EL SERVICIO EN EL COMPONENTE
 */