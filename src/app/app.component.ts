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
  password = [""];
  showSecret = false;
  log = [];


  ngOnInit() {
  }

  onDisplay() {
    this.passwordRevealed = true;
    this.password.push(this.passwordDetails)
    this.passwordDetails = 'Secret Password = La Li Le Lu Lo';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}


