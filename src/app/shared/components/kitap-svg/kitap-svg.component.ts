import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitap-svg',
  standalone: true,
  imports: [CommonModule],
  template: `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="39" viewBox="0 0 36 39" fill="none">
  <path d="M5.25 27V10.5C5.25 4.5 6.75 3 12.75 3H23.25C29.25 3 30.75 4.5 30.75 10.5V25.5C30.75 25.71 30.75 25.92 30.735 26.13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.525 22.5H30.75V27.75C30.75 30.645 28.395 33 25.5 33H18V27H9V32.7817C6.83361 32.1348 5.25 30.124 5.25 27.75V26.775C5.25 24.42 7.17 22.5 9.525 22.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 10.5H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 15.75H19.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 27V35.7858C9 37.1532 10.3134 37.9566 11.3134 37.2216L12.7164 36.1618C13.2239 35.7858 13.8657 35.7858 14.3582 36.1618L15.6866 37.1874C16.6716 37.9395 18 37.1361 18 35.7687V27H9Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `
})
export class KitapSvgComponent {

}
