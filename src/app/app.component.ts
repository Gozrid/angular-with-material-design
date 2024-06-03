import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {NgClass, NgStyle} from "@angular/common";
import {MatCard} from "@angular/material/card";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatButtonToggle,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    NgClass,
    NgStyle,
    MatCard,
    MatButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  textValue = "Hier eingeben!";
  labelText = "Hier eingeben!";
  autoUpdateEnabled = false;

  manualUpdateText() {
    this.labelText = this.textValue;
  }

  toggleAutoUpdate() {
    this.autoUpdateEnabled = !this.autoUpdateEnabled;
  }

  autoUpdate() {
    if (this.autoUpdateEnabled) {
      this.labelText = this.textValue;
    }
  }
}
