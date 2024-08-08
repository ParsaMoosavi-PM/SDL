import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic, notifications, notificationsOutline, personCircleOutline, settings, settingsOutline  } from 'ionicons/icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule,]
})
export class HeaderComponent  implements OnInit {

  constructor() {
    addIcons({ notificationsOutline, settingsOutline, personCircleOutline })
  }
  customPopoverOptions = {
    cssClass: 'custom-select-popover',
    icon: 'person-circle-outline'
  };
  ngOnInit() {}


}
