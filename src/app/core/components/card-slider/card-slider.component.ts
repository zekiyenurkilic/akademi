import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSliderDummyData, responsiveOptions } from '../../constants/dummy';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent {
  responsiveOptions: any = responsiveOptions;
  cardSliderDummy: any = CardSliderDummyData;
}
