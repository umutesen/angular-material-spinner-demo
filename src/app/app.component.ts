import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private spinnerService: SpinnerService,
    private httpClient: HttpClient) { }

  getEmployees() {
    this.httpClient.get<any>('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe(success => {
        console.log('Done');
      }, error => {
        console.error('Error');
      });
  }
}