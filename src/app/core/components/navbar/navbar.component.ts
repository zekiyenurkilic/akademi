import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { EkapakademilogoComponent } from "../../../shared/components/ekapakademilogo/ekapakademilogo.component";
import { menuItemEnum } from "../../constants/data"
import { SliderDummyData, responsiveOptions } from '../../constants/dummy';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, EkapakademilogoComponent, FormsModule, InputTextModule, RouterLink, RouterOutlet, RouterLinkActive, MenuModule]
})
export class NavbarComponent {

  menuItemenum: any = menuItemEnum;
  toggleClick=false;

  value: string | undefined;
  active: boolean = false;

  constructor() { }

  addClass(index: number) {
    //this.active = false;
  }
  onToggleEvent() {

    this.toggleClick = !this.toggleClick
    // $('#menu').addClass("block sm:block md:block lg:hidden xl:hidden 2xl:hidden").slideToggle('slow')

}
}
