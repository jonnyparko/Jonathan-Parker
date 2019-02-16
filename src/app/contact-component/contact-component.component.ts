import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {
  cars: Array<any>;

  constructor(private http: HttpService) { }

  ngOnInit() {
    // this.http.getAll().subscribe(data => {
    //   this.cars = data;
    //   console.log(this.cars);
    // });
  }

  sendEmail() {
    this.http.send().subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    });
  }

}
