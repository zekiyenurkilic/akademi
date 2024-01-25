import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kiklogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kiklogo.component.html',

})
export class KiklogoComponent {
  @Input() color: string | undefined;
  @Input() width: string | undefined;
  @Input() height: string | undefined;
}
