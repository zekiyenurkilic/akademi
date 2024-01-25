import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Duyuru } from 'src/app/models/duyuru';

@Component({
  selector: 'app-alt-menu-duyurular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alt-menu-duyurular.component.html',
  styleUrls: ['./alt-menu-duyurular.component.css']
})
export class AltMenuDuyurularComponent {
  duyurular: Duyuru[] = [{
    id: 1,
    date: new Date(),
    content: "In this lesson, you created an interface that created a new data type for your app. This new data type makes itIn this lesson, you created an interface that created a new data type for your app. This new data type makes it"
  },
  {
    id: 2,
    date: new Date(),
    content: "In this lesson, you created an interface that created a new data type for your app. This new data type makes itIn this lesson, you created an interface that created a new data type for your app. This new data type makes it"
  },
  {
    id: 1,
    date: new Date(),
    content: "In this lesson, you created an interface that created a new data type for your app. This new data type makes itIn this lesson, you created an interface that created a new data type for your app. This new data type makes it"
  },
  {
    id: 2,
    date: new Date(),
    content: "In this lesson, you created an interface that created a new data type for your app. This new data type makes itIn this lesson, you created an interface that created a new data type for your app. This new data type makes it"
  },
  {
    id: 1,
    date: new Date(),
    content: "In this lesson, you created an interface that created a new data type for your app. This new data type makes itIn this lesson, you created an interface that created a new data type for your app. This new data type makes it"
  },
  {
    id: 2,
    date: new Date(),
    content: "In this lesson, you created an interface that created a new data type for your app. This new data type makes itIn this lesson, you created an interface that created a new data type for your app. This new data type makes it"
  }

  ];

}
