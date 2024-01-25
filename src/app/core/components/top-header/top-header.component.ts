import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EkaplogoComponent } from 'src/app/shared/components/ekaplogo/ekaplogo.component';
import { KiklogoComponent } from 'src/app/shared/components/kiklogo/kiklogo.component';
import { SwitchComponent } from "../switch/switch.component";

@Component({
    selector: 'app-top-header',
    standalone: true,
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.css'],
    imports: [CommonModule, EkaplogoComponent, KiklogoComponent, SwitchComponent]
})
export class TopHeaderComponent {
  @Input() padding: string | undefined;
  @Input() textSize: string | undefined;

}
