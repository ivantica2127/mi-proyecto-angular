import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-backbutton',
  imports: [
    MatIcon
  ],
  templateUrl: './backbutton.component.html',
  styleUrl: './backbutton.component.css'
})
export class BackbuttonComponent {

  constructor(private location:Location) {

  }
  goBack() {
    this.location.back();
  }
}
