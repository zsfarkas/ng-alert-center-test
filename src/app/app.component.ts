import {Component} from '@angular/core';
import {Alert, AlertCenterService, AlertType} from 'ng2-alert-center';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private alertService: AlertCenterService) { }

  sendAlert() {
    const alert = Alert.create(AlertType.INFO, 'Hello');

    this.alertService.alert(alert);
  }
}
