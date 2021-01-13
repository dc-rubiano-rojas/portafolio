import { Inject, Injectable, PLATFORM_ID  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';


import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  token = false;

  constructor(private http: HttpClient,
              // @Inject(PLATFORM_ID) private platformId: string,
              // @Inject('LOCALSTORAGE') private localStorage: any
              ) {

    this.token = this.verificaToken();
  }

  login(user: any): Observable<any>{
    this.token = true;
    return this.http.post(`${URL}/login`, user);
  }

  verificaToken(): boolean{
    // if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      // ...
    // }
    return !!localStorage.getItem('token');
    // return false;
  }

  logout(): void{
    this.token = false;
    // if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      // ...
    // }
    localStorage.removeItem('token');
    window.location.reload();
  }


}
