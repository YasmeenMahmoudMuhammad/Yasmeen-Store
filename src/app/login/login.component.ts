import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cardNumberPattern: string = '^[0-9]*$';
  fullName: string | undefined;
  address: string | undefined;
  creditCard: number | undefined;

  constructor(  private Router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.Router.navigate(['/confirmation', this.fullName]);
   }

}
