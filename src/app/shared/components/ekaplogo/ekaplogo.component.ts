import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ekaplogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ekaplogo.component.html',
 
})
export class EkaplogoComponent {
  @Input() color: string | undefined;
  @Input() width: string | undefined;
  @Input() height: string | undefined;

}
