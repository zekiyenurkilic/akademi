import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { LogoServices } from 'src/app/core/services/logoservices';
import { DuyuruSvgComponent } from "../../../shared/components/duyuru-svg/duyuru-svg.component";
import { TakvimSvgComponent } from "../../../shared/components/takvim-svg/takvim-svg.component";
import { HesapSvgComponent } from "../../../shared/components/hesap-svg/hesap-svg.component";
import { FlagSvgComponent } from "../../../shared/components/flag-svg/flag-svg.component";
import { MakaleSvgComponent } from "../../../shared/components/makale-svg/makale-svg.component";
import { KitapSvgComponent } from "../../../shared/components/kitap-svg/kitap-svg.component";
import { GrafikSvgComponent } from "../../../shared/components/grafik-svg/grafik-svg.component";
import { AltMenuIhaleAraclariComponent } from "../../../core/components/alt-menu-ihale-araclari/alt-menu-ihale-araclari.component";
import { AltMenuAyinMakalesiComponent } from "../../../core/components/alt-menu-ayin-makalesi/alt-menu-ayin-makalesi.component";
import { AltMenuAyinKarariComponent } from "../../../core/components/alt-menu-ayin-karari/alt-menu-ayin-karari.component";
import { AltMenuDuyurularComponent } from "../../../core/components/alt-menu-duyurular/alt-menu-duyurular.component";
import { AltMenuEgitimTakvimiComponent } from "../../../core/components/alt-menu-egitim-takvimi/alt-menu-egitim-takvimi.component";
import { AltMenuIstatistikComponent } from "../../../core/components/alt-menu-istatistik/alt-menu-istatistik.component";
import { DialogModule } from 'primeng/dialog';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, GalleriaModule, DuyuruSvgComponent, TakvimSvgComponent, HesapSvgComponent, FlagSvgComponent, MakaleSvgComponent, KitapSvgComponent, GrafikSvgComponent, AltMenuIhaleAraclariComponent, AltMenuAyinMakalesiComponent, AltMenuAyinKarariComponent, AltMenuDuyurularComponent, AltMenuEgitimTakvimiComponent, AltMenuIstatistikComponent, DialogModule]
})
export class HomeComponent implements OnInit {
    images: any[] | undefined;
    logoImages!: any[];
    responsiveOptions: any[] | undefined;
    active: string = "index1";
    openedMenu: string = "index1";
    isdeneyim: string = "https://ekap.kik.gov.tr/EKAP/Vatandas/BelgeGuncelle.aspx";
    iscilikHesaplama: string = "https://ekap.kik.gov.tr/EKAP/Vatandas/IscilikHesaplamaV1.aspx";
    sinirDegerHesaplama: string = "https://ekap.kik.gov.tr/EKAP/Vatandas/SinirDegerHesaplama.aspx";
    mevzuat: string = "https://www.ihale.gov.tr/Mevzuat.aspx";
    visible: boolean = false;
    index: string | undefined;


    constructor(private LogoServices: LogoServices) { }

    ngOnInit() {

        this.images = this.getData();
        this.logoImages = this.LogoServices.getLogoImages();
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5,

            },
            {
                breakpoint: '768px',
                numVisible: 5,

            },
            {
                breakpoint: '560px',
                numVisible: 0,

            }
        ];
    }



    addClass(event: any) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.active = target.id;
        console.log(this.active)
    }

    setIndex(showedModal: any) {
        this.visible = true;
        this.index = "index" + showedModal;
    }

    getData() {
        return [
            {

                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
                alt: 'Description for Image 1 Description for Image 1 Description for Image 1 ',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
                alt: 'Desdfdfdgfgcription for Image  escription for Image 1 Description for Image 1 Descript',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
                alt: 'Desdfdfdgfgcription for Image',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
                alt: 'Desdfdfdgfgcription for Image  escription for Image 1 Description for Image 1 Descript',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
                alt: 'Desdfdfdgfgcription for Image  escription for Image 1 Description for Image 1 Descript',
                title: 'Title 5'
            }

        ];
    }

    goToUrl(link: string) {
        window.open(link);
    }

}
