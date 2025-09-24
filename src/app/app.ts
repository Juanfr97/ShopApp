import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from './pages/shop.component/shop.component';
import { provideHttpClient } from '@angular/common/http';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ShopComponent,SideBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('store-app');
}
