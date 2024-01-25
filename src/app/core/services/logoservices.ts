import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoServices {

  constructor() { }

  getLogoImages() {
    return [
      '../../../assets/images/ankusem 1.png',
      '../../../assets/images/atasem 1.png',
      '../../../assets/images/batman_unv 1.png',
      '../../../assets/images/istanbul_sem 1.png',
      '../../../assets/images/Ticaret_sem 1.png',
      '../../../assets/images/tedusem 1.png',

    ]
  }

}
