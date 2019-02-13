import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Directives';
  passwordDetails = 'Secret Password = ?'
  passwordRevealed = false;
  password = ["The Patriots"];


  ngOnInit() {
  }

  onDisplay() {
    this.passwordRevealed = true;
    this.password.push(this.passwordDetails)
    this.passwordDetails = 'Secret Password = La Li Le Lu Lo';
  }
}


