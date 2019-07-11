import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-display',
  templateUrl: './movies-display.component.html',
  styleUrls: ['./movies-display.component.scss'],
})
export class MoviesDisplayComponent {
  @Input() data: object[];
}
