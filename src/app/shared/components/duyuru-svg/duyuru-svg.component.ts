import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-duyuru-svg',
  standalone: true,
  imports: [CommonModule],
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 37 36" fill="none" id="index1">
  <path d="M21.4286 21V9.00001M21.4286 21L30.582 26.2305C31.182 26.5734 31.9286 26.1402 31.9286 25.4492V4.55087C31.9286 3.85982 31.182 3.42659 30.582 3.76945L21.4286 9.00001M21.4286 21H10.9286C7.61488 21 4.92859 18.3137 4.92859 15C4.92859 11.6863 7.61488 9.00001 10.9286 9.00001H21.4286" stroke="white" stroke-width="1.5"/>
  <path d="M12.0643 28.9502L10.9286 21H16.9286L17.9444 28.1102C18.2 29.8994 16.8116 31.5 15.0043 31.5C13.5264 31.5 12.2733 30.4133 12.0643 28.9502Z" stroke="white" stroke-width="1.5"/>
</svg>
  `,
})
export class DuyuruSvgComponent {

}
