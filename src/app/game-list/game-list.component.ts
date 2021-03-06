import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  availableGames: any;

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get('https://combine4api.herokuapp.com/games/')
      .subscribe((games) => (this.availableGames = games));
      // setInterval(() => {
      //   this.http
      //     .get(environment.games)
      //     .subscribe((games) => (this.availableGames = games));
      // }, 10000);
  }

  joinGame(id: number) {
    this.api.joinGame(id).subscribe((res: any) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
      }
      this.router.navigate(['game', id]);
    });
  }
}