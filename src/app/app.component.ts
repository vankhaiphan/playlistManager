import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'playlistManager';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.router.navigateByUrl('create-account').then(() => {
    //   // reroute vers la page de connexion
    // }) ;
  }
}
