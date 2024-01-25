import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { EgitimTakvimi } from 'src/app/models/egitim-takvimi.interface';


@Component({
  selector: 'app-alt-menu-egitim-takvimi',
  standalone: true,
  imports: [CommonModule, CalendarModule, FormsModule],
  templateUrl: './alt-menu-egitim-takvimi.component.html',
  styleUrls: ['./alt-menu-egitim-takvimi.component.css']
})
export class AltMenuEgitimTakvimiComponent implements OnInit {
  rangeDates: [] = [];
  _localeCal: any;

  egitimTakvimi: EgitimTakvimi[] = [{
    id: 1,
    egitimVerilecekKurum: "Türk Dil Kurumu",//18-01-2024---21-01-2024
    egitimVerilecekKurumLogoPath: "",
    date: ["2024-01-18", "2024-01-21"]

  },
  {
    id: 1,
    egitimVerilecekKurum: "Enerji Piyasası Düzenleme Kurumu",//02-02-2024--03-02-2024
    egitimVerilecekKurumLogoPath: "",
    date: ["2024-02-02", "2024-02-06"]
  },
  {
    id: 1,
    egitimVerilecekKurum: "Türkiye Atom Enerjisi Kurumu",//12-02-2024--16-02-2024
    egitimVerilecekKurumLogoPath: "",
    date: ["2024-02-10", "2024-02-14"]
  },
  {
    id: 1,
    egitimVerilecekKurum: "xjxjxjx jxxjxjjxjx jxjjxjjx jjxjxıvjjvkbj kvjbkvbjv jvbkjvkbjvbk ",//20-02-2024--23-02-2024
    egitimVerilecekKurumLogoPath: "",
    date: ["2024-02-22", "2024-02-25"]
  },

  ];

  constructor(private primeNGConfig: PrimeNGConfig) {

  }




  sonucGoster(firstDate: any, lastDate: any) {

    const listDate = [];
    const dateMove = new Date(firstDate);
    let strDate = firstDate;

    while (strDate < lastDate) {
      strDate = dateMove.toISOString().slice(0, 10);
      listDate.push(new Date(strDate));
      dateMove.setDate(dateMove.getDate() + 1);
    };

    return listDate;
  }

  ngOnInit(): void {
    this.primeNGConfig.setTranslation(
      {
        firstDayOfWeek: 1,
        dayNames: ['Pazartesi', 'Salı', 'Çarşamba', 'Preşembe', 'Cuma', 'Cumartesi', 'Pazar'],
        dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cu', 'Cmrts'],
        dayNamesMin: ['PZ', 'PA', 'SA', 'ÇA', 'PR', 'CU', 'CM'],
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        weekHeader: "Wk"
      }
    );


    const tmpDateRange: any = [];
    this.egitimTakvimi.map((egitim) => {
      const dn = this.sonucGoster(egitim.date[0], egitim.date[1]);
      tmpDateRange.push(dn);
    })
    this.rangeDates = tmpDateRange.flat(1);
  }


}
