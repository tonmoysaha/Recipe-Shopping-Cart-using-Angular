import {Component, EventEmitter, Output} from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export  class HeaderComponent {
  @Output() FeatureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.FeatureSelected.emit(feature);

  }


}
