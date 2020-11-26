import {Component} from '@angular/core';
import {DatastorageService} from "../services/datastorage.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export  class HeaderComponent {

  constructor(private dataservice: DatastorageService){}

  saveData() {
    this.dataservice.dataStorage();

  }
}
