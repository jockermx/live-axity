import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  axityLive = 'assets/img/logo_live.png';
  axityCreacionesDigitales = 'assets/img/creaciones_digitales.png';
  constructor(
    private  router: Router
  ) { }

  ngOnInit() {
  }

  register(form) {
    console.log('FORM: ', form);
    this.router.navigateByUrl('/tabs/tab1');
    /*this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });*/
  }

}
