import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ekapakademilogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ekapakademilogo.component.html',
  styleUrls: ['./ekapakademilogo.component.css']
})
export class EkapakademilogoComponent {
  @Input() width: string = "120";
  @Input() height: string = "60";
}
