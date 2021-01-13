import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { json } from 'express';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  token = localStorage.getItem('token') || '';

  headers = new HttpHeaders({
    token: this.token
  });

  constructor(private http: HttpClient) { }

  createProfile(profile: any): Observable<object>{
    return this.http.post<any>(`${URL}/create-profile`, profile, {headers: this.headers});
  }

  getProfile(id: string): Observable<any>{
    return this.http.get<any>(`${URL}/get-profile/${id}`);
  }

  getProfiles(): Observable<any>{
    this.headers.append('Content-Type', 'application/json');
    return this.http.get<any>(`${URL}/get-profiles`, {headers: this.headers});
  }

  updateProfile(profile: any): Observable<object>{
    return this.http.put<any>(`${URL}/update-profile/${profile._id}`, profile,  {headers: this.headers});
  }


  // test_comprovate(): Promise<any> {
  //   return new Promise(resolve => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open('GET',  'https://miportafolio-danielr.herokuapp.com/get-profiles', false);
  //     xhr.setRequestHeader('Content-Type', 'application/json');
  //     xhr.onload  = () => {
  //       resolve(JSON.parse(xhr.response));
  //       // do something with jsonResponse
  //     };
  //     xhr.send();
  //   });
  // }



}

