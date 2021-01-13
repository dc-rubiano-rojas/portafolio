import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/interfaces';


const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  token = localStorage.getItem('token') || '';

  headers = new HttpHeaders({
    token: this.token
  });

  constructor(private http: HttpClient) { }

  createProject(project: any): Observable<object>{
    return this.http.post<any>(`${URL}/create-project`, project, {headers: this.headers});
  }

  postImage(file: File, id: string, name: string): Observable<any> {
    const img = new FormData();
    img.append('archivo', file, file.name);
    return this.http.put(`${URL}/upload/${id}`, img, {headers: this.headers});
  }

  getImage(img: string): Observable<object> {
    return this.http.get(`${URL}/image/${img}`);
  }

  getProjects(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${URL}/get-projects`, {headers});
  }

  getProject(id: string): Observable<any> {
    return this.http.get<Project>(`${URL}/get-project/${id}`);
  }

  updateProject(project: any): Observable<any> {
    return this.http.put<Project>(`${URL}/update-project/${project._id}`, project, {headers: this.headers});
  }

  deleteProject(id: any): Observable<any> {
    return this.http.delete<Project>(`${URL}/delete-project/${id}`, {headers: this.headers});
  }

}
