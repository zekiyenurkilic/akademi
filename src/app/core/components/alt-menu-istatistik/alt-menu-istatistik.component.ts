import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from "../../../shared/components/video/video.component";
import { DocumentComponent } from "../../../shared/components/document/document.component";
import { CapComponent } from "../../../shared/components/cap/cap.component";
import { PeopleComponent } from "../../../shared/components/people/people.component";

@Component({
    selector: 'app-alt-menu-istatistik',
    standalone: true,
    templateUrl: './alt-menu-istatistik.component.html',
    styleUrls: ['./alt-menu-istatistik.component.css'],
    imports: [CommonModule, VideoComponent, DocumentComponent, CapComponent, PeopleComponent]
})
export class AltMenuIstatistikComponent {

}
