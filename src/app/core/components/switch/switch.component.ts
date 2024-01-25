import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  theme: string = "";
  isChecked: any = false;

  constructor() {
    this.controlStorageData();

  }

  controlStorageData() {
    if (localStorage.getItem("theme") === "dark-theme") {
      this.isChecked = true;
      document.body.classList.add("dark-theme");
    } else {
      this.isChecked = false;
    }

  }

  toggle(isChecked: any) {
    // if (isChecked) {
    //   document.body.classList.add("dark-theme");
    //   localStorage.setItem('theme', 'dark-theme');
    //   this.isChecked = true;

    // } else {
    //   document.body.classList.remove("dark-theme")
    //   localStorage.setItem('theme', '');
    //   this.isChecked = false;
    // }

  }

}
