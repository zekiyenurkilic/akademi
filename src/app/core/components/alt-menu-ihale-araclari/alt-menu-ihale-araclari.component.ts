import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alt-menu-ihale-araclari',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alt-menu-ihale-araclari.component.html',
  styleUrls: ['./alt-menu-ihale-araclari.component.css']
})
export class AltMenuIhaleAraclariComponent {
  isdeneyim: string = "https://ekap.kik.gov.tr/EKAP/Vatandas/BelgeGuncelle.aspx";
  iscilikHesaplama: string = "https://ekap.kik.gov.tr/EKAP/Vatandas/IscilikHesaplamaV1.aspx";
  sinirDegerHesaplama: string ="https://ekap.kik.gov.tr/EKAP/Vatandas/SinirDegerHesaplama.aspx";


  goToUrl(link: any) {
    window.open(link)
}

}
