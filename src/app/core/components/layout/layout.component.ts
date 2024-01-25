import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from "../switch/switch.component";
import { TopHeaderComponent } from '../top-header/top-header.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    imports: [CommonModule, SwitchComponent, TopHeaderComponent, NavbarComponent, FooterComponent]
})
export class LayoutComponent {

    currentPage: any = 1;

    changePage(value: any) {
        this.currentPage = value.page + 1;
    }
}
