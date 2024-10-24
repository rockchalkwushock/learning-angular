import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="props.photo" alt="Exterior photo of {{props.name}}">
      <h2 class="listing-heading">{{props.name}}</h2>
      <p class="listing-location">{{props.city}}, {{props.state}}</p>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input({ required: true }) props!:HousingLocation;
}
