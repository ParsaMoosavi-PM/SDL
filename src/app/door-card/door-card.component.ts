import { addIcons } from 'ionicons';
import { IonApp, IonAccordionGroup } from '@ionic/angular/standalone';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDoorClosed, faDoorOpen, faFont, faS } from '@fortawesome/free-solid-svg-icons';
import { heart, returnDownForward } from 'ionicons/icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faR } from '@fortawesome/free-solid-svg-icons';
import { faB } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { add, chevronBack, chevronDown,chevronBackCircle, chevronForward, chevronUp } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-door-card',
  templateUrl: './door-card.component.html',
  styleUrls: ['./door-card.component.scss'],
  standalone: true,
  imports: [IonApp, IonicModule, FontAwesomeModule, HeaderComponent, TabsPage]
})
export class DoorCardComponent  implements OnInit {
  door:boolean = false;

  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas);
    addIcons({ chevronBackCircle,chevronDown, add, chevronBack, chevronForward, chevronUp });
   }
  doorOpen = faDoorOpen;
  doorClose = faDoorClosed;
  currentIcon = this.doorClose;
  ngOnInit() {}

  date = new Date();

   opendoor() {
    this.door = true;
    console.log("open door");
    console.log(this.date.getFullYear() + "/" + this.date.getMonth() + "/" + this.date.getDay());
    console.log(this.date.getHours() + ":" + this.date.getMinutes());
    this.currentIcon = this.doorOpen;

  }

   closedoor() {
    this.door = false;
    console.log("close door");
    console.log(this.date.getFullYear() + "/" + this.date.getMonth() + "/" + this.date.getDay());
    console.log(this.date.getHours())
    this.currentIcon = this.doorClose;
   }
}
